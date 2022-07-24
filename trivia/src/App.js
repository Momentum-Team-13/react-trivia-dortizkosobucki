import './App.css';
import React from 'react'
import MainPage from './components/Catergories';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import { Routes, Route, Link } from "react-router-dom";
import Questions from './components/Questions';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="home" element={<MainPage />} />
        <Route path="categories" element={<CategoryList />} />
      </Routes> */}
      <MainPage />
    </div>
  )
}

export default App;
