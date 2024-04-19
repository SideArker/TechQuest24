import './App.css'
import Header from "./components/header/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/index"
import Account from './components/account';
import Shedule from "./components/shedule/index"
import Footer from './components/footer';
import Admin from './pages/admin';

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
<<<<<<< HEAD
            <Route  path="/admin" element={<Admin />} />
=======

            <Route path="/konto/:login" element={
                <Account />
            } />
            <Route  path="/admin"/>

>>>>>>> b4fc5e7dbab10e7e3aa45dac9eb547b1433f7772
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
