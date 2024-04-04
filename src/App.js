import React, {Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import Login from './Login'
// import Signup from './Signup'
// import Contact from './Contact'
import Navbar from './Navbar'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const Home = lazy(() => import("./Home"))
const Login = lazy(() => import("./Login"))
const Signup = lazy(() => import("./Signup"))


function App() {
  return (

    <Suspense fallback={<img scr="./../pic2"/>} >
    <BrowserRouter>
    <Navbar/>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


      </Routes>

    </BrowserRouter>
    </Suspense>
  )
}


export default App