// import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/projects'

const App = () => {
  return (
    <div className='max-w-[1028px] mx-auto relative'>
      
      <div />
      <BrowserRouter>
      <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App