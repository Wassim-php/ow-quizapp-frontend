import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage'
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      
    </>
  )
}

export default App
