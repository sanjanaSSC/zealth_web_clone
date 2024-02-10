import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Patients from './pages/Patients'
import Clinicians from './pages/Clinicians'
import Insurance from './pages/Insurance'
import ClinicalTrials from './pages/ClinicalTrials'
import News from './pages/News'
import NewsPage from './pages/NewsPage'
import Contact from './pages/Contact'
import NewsEach from './pages/NewsEach'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/patient' element={<Patients/>}/>
        <Route path='/clinicians' element={<Clinicians/>}/>
        <Route path='/insurance' element={<Insurance/>}/>
        <Route path='/clinicalTrials' element={<ClinicalTrials/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/newspage' element={<NewsPage/>}/>
        <Route path='/newsEach' element={<NewsEach/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
