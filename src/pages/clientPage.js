import React from "react";
import '../styles/app.css'
import '../styles/clientPage.css'
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";

import Chart from 'chart.js/auto';

export default function ClientPage(){
    const state = useLocation()
    console.log(state)
    const path = state.state.state

    let canvas  = window.document.getElementById('canvas')
    let context = canvas.getContext('2d')
    console.log(context)

    let xData = []
    let yData = []

    let historyOfContrybution = path.historyOfContrybution

    function createLineChart(xData, yData){
        let gradient = context.createLinearGradient(0, 0, 0, window.screen.width/2)
        gradient.addColorStop(0, 'rgba(0, 204, 102, 0.8)')
        gradient.addColorStop(1, 'rgba(0, 204, 102, 0.001)')
        canvas.width = 600
        canvas.heigth = 400
        let data = {
            labels: xData,
            datasets: [{
                label: 'Chart',
                data: yData,
                fill: true,
                backgroundColor: gradient
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
        let chart = new Chart(context, config)
        chart.update()
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
        </div>
    )
}