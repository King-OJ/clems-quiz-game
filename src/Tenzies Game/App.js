import React, { useEffect, useState } from 'react'
import './style.css'
import Die from './components/Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = useState(allNewDice)
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function allNewDice(){
        const array = []
        for(let i=0; i < 10; i++) {
           array.push({ 
               value: Math.ceil(Math.random()*6), 
               isHeld: false,
               id: nanoid()
            })
        }
        return array
    }

    function rollDice(){
        if(!tenzies){
        setDice(oldDice => oldDice.map(die =>{ 
            return die.isHeld ? 
            die : { 
               value: Math.ceil(Math.random()*6), 
               isHeld: false,
               id: nanoid()
            }
        
        }))} else {
            setTenzies(false)
            setDice(allNewDice())
        }  
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die =>{
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} : 
            die
        })) 
    }
    
    return (
        <div className="container">
            <main>
            {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {dice.map(x=>
                        <Die key={x.id} id={x.id} value={x.value} isHeld={x.isHeld} holdDice={holdDice}/>
                    )}
                </div>    
                <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
            </main>
        </div>
    )
}
