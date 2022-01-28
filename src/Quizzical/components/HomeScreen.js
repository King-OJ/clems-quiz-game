import React from 'react'

export default function HomeScreen({startQuiz}) {
    return (
        <div className="home-screen">
            <h1>Quizzical</h1>
            <h4>Are you ready to take Clems Quiz?</h4>
            <button onClick={startQuiz}>Start quiz</button>
        </div>
    )
}
