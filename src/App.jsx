import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import HowToHelp from './pages/howToHelp/HowToHelp';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import NoticeForm from './pages/noticeForm/NoticeForm';
import InternalNotice from './pages/internalNotice/internalNotice';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/comoajudar" element={<HowToHelp />} /> 
        <Route path='/contato' element={<Contact/>} />
        <Route path='/sobre' element={<About />} />
        <Route path='/criarNoticia' element={<NoticeForm />}/>
        <Route path='/editarNoticia/:id' element={<NoticeForm />}/>
        <Route path='/noticia/:id' element={<InternalNotice/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
