import React, { useEffect, useRef, useState } from "react";
import '../styles/app.css'
import '../styles/clientPage.css'
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";

import Chart from 'chart.js/auto';
import ClientChart from "../components/clientChart";

export default function ClientPage(){
    const state = useLocation()
    console.log(state)
    const path = state.state.state

    const canvasRef = useRef(null)
    let chart = null
    const [context, setContext] = useState(null)

    useEffect(() => {
        let canvas  = canvasRef.current
        setContext(canvas.getContext('2d'))
    }, [])
    console.log('Context: ', context)


    let xData = []
    let yData = []

    let historyOfContrybution = path.historyOfContrybution

    function createLineChart(xData, yData){
    console.log('Context 2: ', context)

        // let gradient = context.createLinearGradient(0, 0, 0, window.screen.width/2)
        // gradient.addColorStop(0, 'rgba(0, 204, 102, 0.8)')
        // gradient.addColorStop(1, 'rgba(0, 204, 102, 0.001)')
        let data = {
            labels: xData,
            datasets: [{
                label: 'Contribution of clients',
                data: yData,
                fill: true,
                // backgroundColor: gradient
                tension: 0.2
            }]
        }
        let xScaleConfig = {}
        let yScaleConfig = {}
        let config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    x: xScaleConfig,
                    y: yScaleConfig
                }
            }
        }
        chart = new Chart(context, config)
    }

    for(let i = 0; i < historyOfContrybution.length; i++){
        xData.push(historyOfContrybution[i].data)
        yData.push(historyOfContrybution[i].value)
    }

    console.log('Data: ', xData)
    console.log('Value: ', yData)

    createLineChart(xData, yData)

    return (
        <div className="container">
            <Navbar />
            <section className="user_container">
                <div  className="client_img">
                    {/* <i className="fa-solid fa-user" style={{ color: "#a4a5a6", height: '20rem' }}></i>    */}
                </div>
                <article className="info_block">
                    <p className="name border">{ path.name }</p>
                    <div className="more_info_block">
                        <p className="username border">{ path.username }</p>
                        <p className="email border">{ path.email }</p>
                        <p className="phone border">{ path.phone }</p>
                        <p className="website border">{ path.website }</p>
                        <div className="address_block border">
                            <p>City: {path.address.city}</p>
                            <p>Street: {path.address.street}</p>
                            <p>Suite: {path.address.suite}</p>
                            <p>Zipcode: {path.address.zipcode}</p>
                        </div>
                        <div className="company_block border">
                            <p>Name: {path.company.name}</p>
                            <p>Catch: {path.company.catchPhrase}</p>
                            <p>BS: {path.company.bs}</p>
                        </div>
                    </div>
                </article>
            </section>
            <div>
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    )
}