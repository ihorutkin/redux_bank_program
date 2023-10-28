import React from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import { useDispatch, useSelector } from "react-redux";
import { addAllClients } from '../asyncAction/addAllClients'

import '../styles/showClients.css'
import { Link } from "react-router-dom";

export default function ShowClients(){
    const dispatch = useDispatch()
    const clients = useSelector(state => state.customer.clients)
    console.log(clients)

    return (
        <div className='container'>
            <Navbar />
            <div className="client_block">
            <div className="btn_block">
                <button onClick={() => dispatch(addAllClients())} className="show_client_btn">Show all clients in our region</button>
                <button className="show_client_btn">Show statistics in our region</button>
                <button className="show_client_btn">Show graphics in our region</button>
            </div>
                {clients.length > 0 
                ? 
                <div className="clients_list">
                    {
                        clients.map(elem => (
                            <Link to={`/${elem.id}`} state={{ state: elem }} key={elem.id} className="client_item">
                                <div>{ elem.name }</div>
                            </Link>
                        ))
                    }
                </div>
                : 
                console.log('There are no clients')}
            </div>
        </div>
    )
}