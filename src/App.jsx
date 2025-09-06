import './styles/index.css'
import { Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components/shared';

import Home from './pages/Home';
import About from './pages/About';
import Beta from './pages/Beta';
import Clarifi from './pages/Clarifi'
import Contact from './pages/Contact'
import Investors from './pages/Investors';



export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/clarifi" element={<Clarifi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
      <Footer />
    </div>
  );
}