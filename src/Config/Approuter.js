import React from 'react'

import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Service from '../Component/Service'
import Error from '../Component/Error'
import Home from '../Component/Home'
import Header from '../Component/Header'
const Approuter = () => {
    return (
        <>
          <Router>
          <Header />
        <Routes>
           <Route path="/" element={<Home />}  />
           <Route path="/about" element={<About />}  />
           <Route path="/contact" element={<Contact />}  />
           <Route path="/service" element={<Service />}  />
           <Route path="*" element={<Error />}  />

           </Routes>  
           </Router>
        </>
    )
}

export default Approuter