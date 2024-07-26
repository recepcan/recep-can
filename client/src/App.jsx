import AnimatedRoutes from './Components/AnimatedRoutes'
import './App.css'

function App() {
  return (
    <div
   
    className='font-mono  relative  bg-zinc-100 selection:text-white selection:bg-blue-500  dark:text-white 
    transition-colors duration-500 dark:bg-gray-900' >
      {/*darkMode &&
        <img src={bgtransparentgüncel} className='w-[950px] h-[80vh] fixed right-1 top-32  z-0  border-red-300' alt="" />


      */}
      <AnimatedRoutes/>
      
    </div>
  )
}

export default App
{/*<Route path='/Calisma-alanlari' element={<CalismaAlanlari />} />*/ }
{/* <Route path='/online-gorusme' element={<OnlineGörüşme />} />*/ }
{/*<Route path='/Akademik' element={<Akademik />} />*/ }
{/*<Route path='/Blog' element={<Blog />} />*/ }
{/*<Route path='/Galeri' element={<Galeri />} />*/ }