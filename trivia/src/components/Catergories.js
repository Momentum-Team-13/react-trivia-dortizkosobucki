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

