import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import { useDispatch, useSelector } from "react-redux";
import { addAllClients } from '../asyncAction/addAllClients'

import '../styles/showClients.css'
import { Link } from "react-router-dom";

export default function ShowClients(){
    const dispatch = useDispatch()
    const clients = useSelector(state => state.customer.clients)

    useEffect(() => {
        dispatch(addAllClients())
    }, [])
    console.log(clients)
    let historyOfContrybution = []
    let data = []
    let value = []
    let endData = Date.now()
    let startData = endData - 2678400000
    let interval = endData - startData

    const getRandomMoney = () => {
        return Math.floor((Math.random() * 10000) + 1)
    }
    
    const getRandomDate  = () => {
        return Math.floor((Math.random() * interval) + 1)
    }

    for(let i = 0; i < clients.length; i++){
        data.push(new Date(startData + getRandomDate()).toLocaleDateString())
        value.push(getRandomMoney())
    }

    console.log('Data: ', data)
    console.log('Value: ', value)

    const createHistoryOfContribution = () => {
        for(let i = 0; i < 10; i++){
            historyOfContrybution.push({data: data[i], value: value[i]})
        }
        return historyOfContrybution
    }
    createHistoryOfContribution()

    console.log('History of contribution: ', historyOfContrybution)

    return (
        <div className='container'>
            <Navbar />
            <div className="client_block">
            <div className="btn_block">
                {/* <button onClick={() => dispatch(addAllClients())} className="show_client_btn">Show all clients in our region</button> */}
                <button className="show_client_btn">Show statistics in our region</button>
                <button className="show_client_btn">Show graphics in our region</button>
            </div>
                {clients.length > 0 
                ? 
                <div className="clients_list">
                    {
                        clients.map(elem => {
                            return (
                                elem.money = getRandomMoney(),
                                elem.date = getRandomDate(),
                                elem.historyOfContrybution = historyOfContrybution,
                                <Link to={`/${elem.id}`} state={{ state: elem }} key={elem.id} className="client_item">
                                    <div>{ elem.name }</div>
                                </Link>)
                        })
                    }
                </div>
                : 
                console.log('There are no clients')}
            </div>
        </div>
    )
}