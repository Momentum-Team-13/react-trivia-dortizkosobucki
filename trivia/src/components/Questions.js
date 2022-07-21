import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Questions({ categoryURL }) {

    const [triviaQuestions, setTriviaQuestions] = useState([])

    function decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
            .get(categoryURL)
            .then((res) => { setTriviaQuestions(res.data.results) })
    }, [categoryURL])
    return (
        <div>
            <h1>Question 1</h1>
            <p>{decodeHtml(triviaQuestions[0].question)}</p>
        </div>
    )
}

export default Questions