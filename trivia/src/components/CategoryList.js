import React from 'react'
// import {useState} from 'react'

function CategoryList({ categories }) {
    // const [data, setData] = useState([])
    const afterClick = () => {
        console.log("ok")
    }

    return (
        <div>
            <h1>Category List</h1>
            {categories.map((category) =>
                <div>
                    <button onClick={afterClick}>{category.name}</button>
                </div>
            )}

        </div>
    )
}

export default CategoryList