import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Iletişim from '../Pages/Iletişim'
import ToggleMenu from '../Components/ToggleMenu'
import Footer from '../Components/Footer'
import About from '../Pages/About'
import Home from '../Pages/Home'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import SignUp from './SignUp'
import AdminPage from '../Pages/Adminpages/AdminPage'
import SignIn from './Signin'
function AnimatedRoutes() {
    const { menu } = useSelector(state => state.header)

    return (
        <AnimatePresence>
            <Router>
                <Header />

                {
                    menu && <ToggleMenu />
                }
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/Hakkinda' element={<About />} />

                    <Route path='/İletişim' element={<Iletişim />} />
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/admin' element={<AdminPage/>}/>

                </Routes>
                <Footer />
            </Router>
        </AnimatePresence>
    )
}

export default AnimatedRoutes