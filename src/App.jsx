
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Portfolio from "./pages/Portfolio/Portfolio"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
