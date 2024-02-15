import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { BottomBar } from './components/BottomBar'
import { Content } from './components/Content'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div className="wrapper">
      <SideBar/>
      <Content/>
    </div>
    <BottomBar/>
   
    </Router>
    </>
  )
}

export default App
