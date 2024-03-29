import { Route, Routes } from "react-router-dom"
import MainLayout from "./Layout/Main-layout"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import DetailBlog from './Pages/DetailBlog/DetailBlog';
import Pricing from './Pages/Pricing/Pricing';
import { ToastContainer } from "react-toastify";
import Profile from "./Pages/profile/Profile";


function App() {


  return (
    <>
      <ToastContainer position="top-right" theme="colored"/>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/detailBlog" element={<DetailBlog/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
