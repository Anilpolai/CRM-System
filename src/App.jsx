import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
      <h2>Dashboard Content Goes Here</h2>
    </Layout>
    </>
  )
}

export default App
