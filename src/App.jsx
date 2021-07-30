import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './layouts/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main/>
    </div>
  )
}

export default App
