
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'

import Navbar from './components/navbar/navbar'

function App() {


  return (
    <div className='app'>
      <Navbar />

      <Outlet />
      <Footer />

    </div>
  )
}

export default App
