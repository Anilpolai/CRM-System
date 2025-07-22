import { useState } from 'react'
import './App.css'
import Navbar from './components/Navber/navbar'
import Sidebar from './components/sidebar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
