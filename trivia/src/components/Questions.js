import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Questions({ categoryURL }) {
    const [question, setQuestion] = useState([])
    function decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
            .get(categoryURL)
            .then((res) => setQuestion(res.data.results))
    }, [categoryURL])
    return (
        <div>
            <h1>Question 1</h1>
            <p>{decodeHtml(question)}</p>
        </div>
    )
}

export default Questions