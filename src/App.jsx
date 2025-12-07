import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </>
  )
}

export default App
