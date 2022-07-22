import React from 'react'
import { useState } from 'react'
import Questions from './Questions'
// import Categories from './Catergories'

function CategoryList({ categories }) {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [categoryURL, setCategoryURL] = useState()
    const afterClick = () => {
        console.log('selected')
    }
    const handleSelectedCategory = (selected) => {
        console.log(`selected category: ${selected.name}, id: ${selected.id}`)
        setSelectedCategory(selected)
        makeURL(selected)
    }
    const makeURL = (selectedCategory) => {
        setCategoryURL(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&type=multiple`)
    }

    return (
        <div>
            {selectedCategory ? (
                <h1>{selectedCategory.name}</h1>
            ) : (
                <h1>Catergory List</h1>
            )}
            {selectedCategory ? (
                <Questions categoryID={categoryURL} />
            ) : (
                categories.map((category) =>
                    <div>
                        <button onClick={() => handleSelectedCategory(category)}>{category.name}</button>
                    </div>
                )
            )}
        </div >
    )
}

export default CategoryList