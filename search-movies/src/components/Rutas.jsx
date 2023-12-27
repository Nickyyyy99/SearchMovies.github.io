import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleMovies from './SingleMovies'
import MainPage from './MainPage'

export default function Rutas() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/movies/:id' element={<SingleMovies />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}
