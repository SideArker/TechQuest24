import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/index"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
