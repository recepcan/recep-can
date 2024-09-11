import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './Header'
import Iletişim from '../Pages/Contact'
import ToggleMenu from './ToggleMenu'
import Footer from './Footer'
import About from '../Pages/About'
import Home from '../Pages/Home'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import SignUp from './SignUp'
import SignIn from './Signin'
import PrivateRoute from './PrivateRoute'
import AdminPage from '../Pages/Adminpages/AdminPage'
import Modal from './Modal'
import CreatePost from '../Pages/Adminpages/CreatePost'
import UpdatePost from '../Pages/Adminpages/UpdatePost'
import Projects from '../Pages/Projects'
import UpdateText from '../Pages/UpdateText'
import TextsPage from '../Pages/TextsPage'
import Text from '../Pages/CreateText'
import ForgotPassword from '../Pages/ForgotPassword'
import ResetPassword from '../Pages/ResetPassword'
import Contact from '../Pages/Contact'
import Loading from './Loading'
import ScrollToTop from './ScrollToTop'
function Layout() {
    const { menu } = useSelector(state => state.header)
    const { modal } = useSelector(state => state.modal)
    const { currentUser } = useSelector(state => state.user)
    const location = useLocation()

    return (

        <div className='relative'>
        <ScrollToTop/>


            {
                location.pathname !== '/admin' && location.pathname !== '/sign-in' && location.pathname !== '/sign-up' &&  <Header />
            }

            {
                modal && <Modal />
            }

            {
                menu ? 
                <ToggleMenu /> 
                :
                <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/about' element={<About />} />

                <Route path='/contact' element={<Contact />} />

                <Route path='/post/:postSlug' element={<Projects />} />


               <Route path='/sign-in' element={<SignIn />} />
               <Route path='/forgot-password' element={<ForgotPassword/>} />
               <Route path='/reset-password/:id/:token' element={<ResetPassword/>} />
                <Route path='/texts/:textId' element={<TextsPage />} />
                

                <Route element={<PrivateRoute />}>
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/create-post' element={<CreatePost />} />
                <Route path='/update-post/:postId' element={<UpdatePost />} />
                <Route path='/update-text/:textId' element={<UpdateText/>} />
                <Route path='/create-text' element={<Text />} />
              </Route>

            </Routes>
            }
            
            {
                location.pathname !== '/admin' && location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Footer />
            }
        </div>

    )
}

export default Layout

{ /*                <Route path='/sign-up' element={<SignUp />} /> */} 