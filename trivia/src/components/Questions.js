import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Questions({ categoryURL }) {
    const [triviaQuestions, setTriviaQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [messageAnswer, setMessageAnswer] = useState(null)

    //decode and make html readable for questions 
    function decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    //set new array for the randomized answers 
    function getShuffledArr(arr) {
        const newArr = arr.slice()
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr
    }

    //call information 
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
            .get(categoryURL)
            .then((res) => { setTriviaQuestions(res.data.results) })
    }, [categoryURL])

    //organize answer list instead of map 
    function getAnswerList() {
        let incorrectAnswers = triviaQuestions[currentQuestionIndex].incorrect_answers
        let correctAnswers = triviaQuestions[currentQuestionIndex].correct_answer
        console.log(triviaQuestions)
        let combinedAnswers = [...incorrectAnswers, correctAnswers]
        let shuffledArr = getShuffledArr(combinedAnswers)
        return shuffledArr
    }

    // user input answer
    function handleUserAnswer(answer) {
        let correctAnswers = triviaQuestions[currentQuestionIndex].correct_answer
        if (answer === triviaQuestions[currentQuestionIndex].correctAnswers) {
            console.log("is this thing on?")
            alert("Hip Hip Hooray! Nice Work.")
            { setCount(count + 1) }
        } else {
            console.log("oh noooo")
            alert("Oh no! Nice Try, The Right Answer is ${correctAnswer}")
        }
        { setCurrentQuestionIndex(currentQuestionIndex + 1) }
    }


    //return for Questions function
    return (
        <>
            <div className='questions-list'>
                {triviaQuestions.length > 0 &&
                    <>
                        <h1>Question{currentQuestionIndex + 1}:<br />
                            {decodeHtml(triviaQuestions[currentQuestionIndex].question)}</h1>
                        <ul>
                            {getAnswerList().map(
                                (answer, index) => <li key={index}>
                                    <button className='answerButtons' onClick={() => { handleUserAnswer(answer) }}>{decodeHtml(answer)}</button>
                                </li>
                            )}
                        </ul>
                        <br />
                        <button>You have {count} right answers.</button>
                    </>
                }
            </div>
        </>
    );
}


// second edit 
//<>
//     {triviaQuestions ?
//         <div className="questions">
//             {triviaQuestions.map((question) =>
//                 <div className="single-question">
//                     <li key={question.question}> {decodeHtml(question.question)}
//                         <ul><input type="radio" value={decodeHtml(question.correct_answer)} name="answer" />{decodeHtml(question.correct_answer)}</ul>
//                         <div>
//                             {question.incorrect_answers.map((answer) => (
//                                 <ul><input type="radio" value={decodeHtml(answer.incorrect_answers)} name="answer" />{decodeHtml(answer)}</ul>
//                             ))}
//                         </div>
//                     </li>
//                 </div>)}
//         </div> : ("")}
// </>

//first edit 
// <div>
//     <h1>Questions</h1>
//     {triviaQuestions.length > 0 &&
//         <p>{decodeHtml(triviaQuestions[0].question)}</p>}
// </div >
//     );
// }

export default Questions