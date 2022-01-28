import React from "react";
import Header from "./Header"
import Section from "./Section"
import data from "./data"

export default function App() {
    const keys = data.map(function(item){
        return (
            <Section 
                {...item}
            />
        )
    })

    return (
        <div className="container">
        <Header />
        {keys}
        </div>
    )
}