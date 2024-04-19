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
            <Route  path="/admin" element={<Admin />} />
<<<<<<< HEAD
            <Route path="/konto/:login" element={
                <Account />
            } />
            <Route  path="/admin"/>
=======

            <Route path="/konto/:login" element={
                <Account />
            } />

>>>>>>> a41b16acd6429ec1f29260eb133988fbbcbb5e86
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
