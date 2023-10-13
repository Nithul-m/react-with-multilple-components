
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
function App() {
  return (
      
    <Router>
      <Header />
        <Routes>
          
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>

        </Routes>
        <Footer />
      </Router>

  )
}

export default App;
