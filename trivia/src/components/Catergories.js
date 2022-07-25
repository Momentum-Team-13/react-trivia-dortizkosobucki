//attempted new method
// import React, { useEffect, useState } from 'react'
// import CategoryList from './CategoryList';
// import axios from 'axios'
// import Questions from './Questions';


// function Categories(props) {
//     const { handleCategories } = props
//     const [selectedCategory, setSelectedCategory] = useState('')
//     const [endGame, setEndGame] = useState(false)
//     const [count, setCount] = useState(0)
//     const [categoryList, setCategoryList] = useState([])
//     const afterClick = () => {
//         console.log('selected')
//     }

//     useEffect(() => {
//         axios
//             .get('https://opentdb.com/api_category.php')
//             .then((res) => {
//                 const categoryList = res.data.trivia_categories
//                 setCategoryList(categoryList)
//             })
//     }, [])

//     return (
//         <div>
//             {selectedCategory ? (
//                 <h1>{selectedCategory.name}</h1>
//             ) : (
//                 <h1>Category List</h1>
//             )}
//             {selectedCategory ? (
//                 <Questions categoryList={categoryList} />
//             ) : (
//                 categoryList.map((category) =>
//                     <div>
//                         <button onClick={() => setSelectedCategory(category)}>{category.name}</button>
//                     </div>
//                 )
//             )}
//         </div>
//     )

// }
// export default Categories

import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import axios from 'axios'


function MainPage() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then((res) => setCategories(res.data.trivia_categories))
    }, [])

    return (
        <div>
            <CategoryList categories={categories} />
        </div>
    );
}

export default MainPage;
