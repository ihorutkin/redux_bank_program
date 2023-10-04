import React from "react";
import Navbar from "../components/navbar";
import '../styles/app.css'
import '../styles/navbar.css'
import AddMoneyComponent from "../components/addMoneyComponent";

export default function Home(){
    return (
        <div className='container'>
            <Navbar />
            <h1>Home page</h1>
            <AddMoneyComponent />
        </div>
    )
}