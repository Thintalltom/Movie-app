import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import Navbar from './Navbar/Navbar'

function App() {
  

  return (
    <>
      <div className='flex '>
      <Navbar />
      <SearchBar />
      </div>
    </>
  )
}

export default App
