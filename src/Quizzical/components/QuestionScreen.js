import React from 'react'

export default function QuestionScreen({
    questions, 
    handleRestart, 
    handleAnswer, 
    handleSubmit, 
    submitted,
    checkResult,
    loading,
}) {

    if(loading){
       return <main>
           <h2 className="loading">...I'm loading your questions</h2>
       </main>
    }
    
    return (
        <main>
         {
            questions.map((item, index) => {
            const {question, answers, correct_answer } = item
            
            return (
                <div key={index} className="questions">
                    <h2 dangerouslySetInnerHTML={{__html: question }} />
                    <div className="answers-box">
                        {answers.map((ans) => {
                            const { answer, id , clicked, isCorrect} = ans;
                            let color = ""
                            if(clicked){
                                color = "clicked"
                            }
                            if((clicked && isCorrect === true) || (submitted && (answer === correct_answer))){
                                color = "correct"
                            }

                            if(clicked && isCorrect === false){
                                color = "wrong"
                            }
                            
                            
                            return (
                            <div className={`answers ${color}`} key={id} onClick={()=>handleAnswer(id)} >
                                <h4 dangerouslySetInnerHTML={{__html: answer}} />
                            </div>
                            )}
                        )}
                    </div>
                </div> )
            })
         }
        
        
            {questions.length > 0 && (submitted ?  
            <div className="results-box">
            <h4>You scored {checkResult()}/{questions.length} correct answers</h4>
            <div className="btn-box">
                <button onClick={handleRestart} >Play Again</button>
            </div>
            </div>
            : 
            
            <div className="btn-box">
                <button onClick={handleSubmit} >Check answers</button>
            </div>)
            }
            
        </main>
    )
}
