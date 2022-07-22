import './App.css';
import React from 'react'
import MainPage from './components/Catergories';
import Skeleton from 'react-loading-skeleton'

function App() {
  const wrapped2 = (
    <App>
      <Skeleton />
    </App>
  )
  return (
    <div>
      <MainPage />
    </div>
  )
}

export default App;
