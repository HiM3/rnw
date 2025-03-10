import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePage from './pages/HomePage'
import Create from './pages/Create'
import Header from './layout/Header'
import View from './pages/View'
import Update from './pages/Update'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App