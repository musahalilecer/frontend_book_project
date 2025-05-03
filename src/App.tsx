import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/page/MainPage'
import Navbar from './components/template/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/page/Home'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Login from './components/template/Login'
import Register from './components/template/Register'
import Footer from './components/template/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar className="w-full" />

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>

    <Footer className='mb-0'/>
  </div>
  )
}

export default App;
