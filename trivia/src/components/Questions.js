import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endGame from './Endgame'
import { Link } from "react-router-dom"
import MainPage from './Catergories'
import CategoryList from './CategoryList'

function Questions(categoryURL, selectedCategory) {
    const { categoryID } = categoryURL
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
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${categoryID}&type=multiple`)
            .then((res) => { setTriviaQuestions(res.data.results) })
    }, [categoryID])

    //organize answer list instead of map 
    function getAnswerList() {
        console.log(`categoryID ${categoryID}`)
        console.log(`current index ${currentQuestionIndex}`)
        console.log(`trivia questions ${triviaQuestions}`)
        let incorrectAnswers = triviaQuestions[currentQuestionIndex].incorrect_answers
        let correctAnswers = triviaQuestions[currentQuestionIndex].correct_answer
        let combinedAnswers = [...incorrectAnswers, correctAnswers]
        let shuffledArr = getShuffledArr(combinedAnswers)
        return shuffledArr
    }

    // user input answer
    function handleUserAnswer(answer) {
        let correctAnswers = triviaQuestions[currentQuestionIndex].correct_answer
        if (answer === triviaQuestions[currentQuestionIndex].correct_answer) {
            console.log("is this thing on?")
            alert("Hip Hip Hooray! Nice Work.")
            { setCount(count + 1) }
        } else {
            console.log("oh noooo")
            alert(`Oh no! Nice Try, The Right Answer is ${correctAnswers}`)
        }
        { setCurrentQuestionIndex(currentQuestionIndex + 1) }
    }

    function handleEndGame() {

    }

    //return for Questions function
    return (
        <>
            {currentQuestionIndex < 10 ? (
                <div className='questions-list'>
                    {triviaQuestions.length > 0 &&
                        <>
                            <h1>Question {currentQuestionIndex + 1}:<br />
                                {decodeHtml(triviaQuestions[currentQuestionIndex].question)}</h1>
                            <ul>
                                {getAnswerList().map(
                                    (answer, index) => <li key={index}>
                                        <button className='answerButtons' onClick={() => { handleUserAnswer(answer) }}>{decodeHtml(answer)}</button>
                                    </li>
                                )}
                            </ul>
                            <br />
                            <h3>You have {count} right answers.</h3>
                            <button onClick={() => { handleEndGame('') }}>End Game and Return to Categories List</button>
                        </>
                    }
                </div>
            ) : (
                <div className='end-screen'>
                    <h1>That's All Folks!</h1>
                    <h2>Thanks for Playing Trivia. You scored {count} correct questions</h2>
                    {count > 7 ? (
                        <h3>Way to go rockstar!</h3>
                    ) : (
                        <h3>Better freshen up those skills!</h3>
                    )}
                    <button onClick={() => { handleEndGame(' ') }}>Play Again!</button>
                </div>
            )}
        </>
    );
}

export default Questions