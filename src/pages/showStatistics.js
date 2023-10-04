import React from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import '../styles/navbar.css'

export default function ShowStatistics(){
    return (
        <div className='container'>
            <Navbar />
            <h1>Statistics page</h1>
        </div>
    )
}