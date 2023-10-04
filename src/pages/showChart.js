import React from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import '../styles/navbar.css'

export default function ShowChart(){
    return (
        <div className='container'>
            <Navbar />
            <h1>Chart page</h1>
        </div>
    )
}