import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import '../styles/navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { addAllClients } from '../asyncAction/addAllClients'

export default function ShowClients(){
    const dispatch = useDispatch()
    const clients = useSelector(state => state.customer.clients)
    console.log(clients)
    
    return (
        <div className='container'>
            <Navbar />
            <button onClick={() => dispatch(addAllClients())}>Show all clients</button>
            {clients.length > 0 
            ? 
            <div className="clients_list">
                {
                    clients.map(elem => {
                        return <div key={elem.id}>{ elem.name }</div>
                    })
                }
            </div>
            : 
            console.log('There are no clients')}
        </div>
    )
}