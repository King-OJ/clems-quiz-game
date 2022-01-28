import React from "react";
import logo from "./logo.png";

export default function Header() {
    return (
        <header>
            <img src={logo} className="logo"></img>
            <h1>my travel journal.</h1>
        </header>
        
    )
}