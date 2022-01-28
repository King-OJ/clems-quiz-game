import React from 'react'

export default function Die({value, isHeld, holdDice, id}) {
    const styles = {
       backgroundColor :  isHeld === true ? "#59E391" : "white"
    }
    return (
        <div className="die-face" style={styles} onClick={()=>holdDice(id)}>
           <h2 className="die-num">{value}</h2>
        </div>
    )
}
