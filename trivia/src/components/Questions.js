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
            <h1>Questions</h1>
            {triviaQuestions.length > 0 &&
                <p>{decodeHtml(triviaQuestions[0].question)}</p>}
        </div>
    );
}

export default Questions