import './App.css'
import Header from "./components/header/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/index"
import Account from './components/account';
import Shedule from "./components/shedule/index"
import Footer from './components/footer';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Shedule />
              </>
            } />

            <Route path="/konto/:login" element={
                <Account />
            } />
            <Route  path="/admin"/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
