import React from 'react'
import './App.css'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import FilterPage from './Pages/FilterPage/FilterPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/details/:id' element={<DetailsPage/>}/>
          <Route path='/filter/:especie' element={<FilterPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App