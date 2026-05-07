import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rights from './pages/Rights';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
