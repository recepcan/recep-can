import AnimatedRoutes from './Components/Layout'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout';
function App() {
  return (
    <div
    className='font-mono  relative   bg-gray-100 selection:text-white selection:bg-blue-500  dark:text-white 
    transition-colors duration-500 dark:bg-[#030620] ' >
      {/*darkMode &&
        <img src={bgtransparentgüncel} className='w-[950px] h-[80vh] fixed right-1 top-32  z-0  border-red-300' alt="" />


      */}
      <Router>
      <Layout/>
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App
{/*<Route path='/Calisma-alanlari' element={<CalismaAlanlari />} />*/ }
{/* <Route path='/online-gorusme' element={<OnlineGörüşme />} />*/ }
{/*<Route path='/Akademik' element={<Akademik />} />*/ }
{/*<Route path='/Blog' element={<Blog />} />*/ }
{/*<Route path='/Galeri' element={<Galeri />} />*/ }