import React from "react";
import '../styles/app.css'
import '../styles/clientPage.css'
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";

export default function ClientPage(){
    const state = useLocation()
    console.log(state)
    const path = state.state.state
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