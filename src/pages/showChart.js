import React, {useEffect, useRef, useState} from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import '../styles/navbar.css'
import Chart from "chart.js/auto";

export default function ShowChart(){
    let chart = null
    let year = 1000 * 60 * 60 * 24 * 365
    let endData = Date.now()
    let startData = endData - year
    let data = []
    let value = []
    let historyOfOurRegion = []

    let [context, setContext] = useState(null)
    const canvasRef = useRef(null)
    useEffect(() => {
        let canvas = canvasRef.current
        setContext(canvas.getContext('2d'))
    }, [])

    console.log('render')

    const getRandomMoney = () => {
        return Math.floor((Math.random() * 10000) + 1)
    }

    const getRandomDate = () => {
        return Math.floor((Math.random() * year) + 1)
    }

    for(let i = 0; i < 100; i++){
        data.push(new Date(startData + getRandomDate()).toLocaleDateString())
        value.push(getRandomMoney())
    }

    const createHistoryOfOurRegion = () => {
        for(let i = 0; i < 100; i++){
            historyOfOurRegion.push({data: data[i], value: value[i]})
        }
        return historyOfOurRegion
    }
    createHistoryOfOurRegion()

    let xData = []
    let yData = []

    // const realTimeAnimation = (xData, yData, data) => {
    //     let i = 20
    //     let interval = setInterval(() => {
    //         if(i > historyOfOurRegion.length) clearInterval(interval)
    //         else if(!pauseMode){
                
    //         }
    //     })
    // }

    const createLineChart = (xData, yData) => {
        let data = {
            labels: xData,
            datasets: [{
                label: 'Chart',
                data: yData,
                fill: true,
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

    for(let i = 0; i < historyOfOurRegion.length; i++){
        xData.push(historyOfOurRegion[i].data)
        yData.push(historyOfOurRegion[i].value)
    }

    let xStartData = []
    let yStartData = []
    let xParseData = []
    let yParseData = []

    for(let i = 0; i < historyOfOurRegion.length; i++){
        if(i < 20){
            xStartData.push(xData[i])
            yStartData.push(yData[i])
        }
        else{
            xParseData.push(xData[i])
            yParseData.push(yData[i])
        }
    }

    createLineChart(xStartData, yStartData)

    // console.log('Year: ', year)
    // console.log(new Date(startData + getRandomDate()).toLocaleDateString())
    // console.log('Data: ', data)
    // console.log('Value: ', value)
    return (
        <div className='container'>
            <Navbar />
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}