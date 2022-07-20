import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Questions({ categoryURL }) {
    const [question, setQuestion] = useState()
    useEffect(() => {
        console.log(`url: ${categoryURL}`)
        axios
            .get(categoryURL)
            .then((res) => setQuestion(res.data.results[0].question))
    }, [])
    return (
        <div>
            <h1>Question 1</h1>
            <p>{question}</p>
        </div>
    )
}

export default Questions