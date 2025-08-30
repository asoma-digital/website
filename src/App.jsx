import { Routes, Route } from 'react-router-dom';

import Beta from './pages/beta';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <About />
            <Contact />
            <Newsletter />
          </>
        } />
        <Route path="/beta" element={<Beta />} />
      </Routes>
      <Footer />
    </>
  );
}