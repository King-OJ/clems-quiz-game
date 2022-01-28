import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import data from "./Data"
import Card from "./Card"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {

    const cards = data.map(x => { 
    return (
    <Card 
        key={x.id}
        x={x}
        //{...x}
    />
    )
})

    return (
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}

// <Hero />