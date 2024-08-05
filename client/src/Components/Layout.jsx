import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './Header'
import Iletişim from '../Pages/Iletişim'
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
function Layout() {
    const { menu } = useSelector(state => state.header)
    const { modal } = useSelector(state => state.modal)
    const { currentUser } = useSelector(state => state.user)
    const location = useLocation()
    return (

        <div >
            {
                location.pathname !== '/admin' && location.pathname !== '/sign-in' && location.pathname !== '/sign-up' &&  <Header />
            }

            {
                modal && <Modal />
            }

            {
                menu && <ToggleMenu />
            }
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/Hakkinda' element={<About />} />

                <Route path='/İletişim' element={<Iletişim />} />

                <Route path='/post/:postSlug' element={<Projects />} />

                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/texts/:id' element={<TextsPage />} />

                <Route element={<PrivateRoute />}>
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/create-post' element={<CreatePost />} />
                <Route path='/update-post/:postId' element={<UpdatePost />} />
                <Route path='/update-text/66b124be8e2076ecbe826a24' element={<UpdateText/>} />
              </Route>

            </Routes>
            {
                location.pathname !== '/admin' && location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Footer />
            }
        </div>

    )
}

export default Layout