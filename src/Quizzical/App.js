import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'

import './style.css'

export default function App() {
    const [start, setStart] = useState(false)
    const [questions, setQuestions] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [loading,setLoading] = useState(false)

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function fetchQuiz(){
        setLoading(true)
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        .then(response => response.json())
        .then(data => {
            
            setQuestions(data.results.map((question) =>{
            const {  correct_answer, incorrect_answers } = question
            const ans = [...incorrect_answers, correct_answer]
            const answers = shuffle(ans).map((answer)=>{
                return { answer: answer, id: nanoid(), clicked: false, isCorrect: null }
            })
    
            return {...question, answers: answers}
            
        }))
        setLoading(false)
    }
        )
        
    }

    function startQuiz(){
        setStart(true)
        fetchQuiz()
        setSubmitted(false)
    }

    function handleAnswer(id){
        setQuestions((oldQuestions)=>{
            return oldQuestions.map((question)=>{
                return {...question, answers: question.answers.map((answer)=>{
                    if(answer.id === id){
                        return {...answer, clicked: !answer.clicked}
                    } else{
                        return {...answer}
                    }
                 })
                } 
            })
        })
        }

        function handleSubmit(){
        
            setQuestions((oldQuestions)=>{
                return oldQuestions.map((question)=>{
                    
                    return {...question, answers: question.answers.map((answer)=>{
                        
                        if(answer.clicked && (question.correct_answer === answer.answer) ){
                            return {...answer, isCorrect: true}
                        } else if(answer.clicked && (question.correct_answer !== answer.answer)) {
                            return {...answer, isCorrect: false}
                        } else {
                            return {...answer}
                        }  
                        
                    }) }
                })
            })
            setSubmitted(true)
        }

        function checkResult(){
            return (questions.map((question) => question.answers.filter((answer)=> answer.isCorrect === true))).filter((answer) => answer.length > 0).length
         }  
        
    function handleRestart(){
        setStart(false)
        setQuestions([])
        setSubmitted(false)
    }

    return (
        <div className="app-container">
        <img className="top-img" src="/blob 5.png" alt=''/>
        {!start && <HomeScreen startQuiz={startQuiz} />}
        {
        start && 
         <QuestionScreen 
         questions={questions} 
         handleRestart={handleRestart} 
         handleAnswer={handleAnswer} 
        handleSubmit={handleSubmit}
        submitted={submitted}
        checkResult={checkResult}
        loading={loading}
         />
        }
        <img className="bottom-img" src="/blobs.png" alt=''/>
        </div>
    )
}

