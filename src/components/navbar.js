import React from "react";
import '../styles/navbar.css'

export default function Navbar(){
    return (
        <nav className="navbar">
            <a className="item" href="/">home</a>
            <a className="item" href="show_clients">show clients</a>
            <a className="item" href="show_chart">show chart</a>
            <a className="item" href="show_statistics">show statistics</a>
            <a className="item" href="invest">Investing</a>
        </nav>
    )
}