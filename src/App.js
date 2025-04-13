import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import HowToHelp from './pages/home/howToHelp/HowToHelp';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/comoajudar" element={<HowToHelp />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
