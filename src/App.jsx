
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Portfolio from "./pages/Portfolio/Portfolio"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"
import BlogDetail from "./pages/BlogDetail/blogDetail"
import Faq from "./pages/Faq/Faq"
import ServicesDetail from "./pages/ServicesDetail/servicesDetail"

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
        <Route path="BlogDetail/:id" element={<BlogDetail/>}/>
        <Route path="Faq" element={<Faq/>}/>
        <Route path="/ServicesDetail/:id" element={<ServicesDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
