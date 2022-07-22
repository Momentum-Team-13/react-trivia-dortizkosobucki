import React from "react";
// import CategoryList from "./CategoryList";

function endGame({ selectedCategory, count }) {

    return (
        <div>
            <h1>Thanks for Playing Trivia!</h1>
            <div>You got {count} right answers out of ten</div>
            <div>
                <button type="button" onClick={() => selectedCategory(null)}>Start New Game?</button>
            </div>
        </div>
    )
    // add in if under certain number, try again
    // if over 8 you rock
    // if count === 10 you are a superstar
    // if 7-9 you are awesome, keep up the good work 
    // if 3-6 maybe try another category
    // if 1-2 best try again 
}

export default endGame