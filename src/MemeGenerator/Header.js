import React from "react";
import logo from "./logo.png"

export default function Header() {
    return (
        <header>
                <img src={logo} className="header--img" alt="mypic"/>
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}