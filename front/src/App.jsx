import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import HowToHelp from './pages/howToHelp/HowToHelp';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import NoticeForm from './pages/noticeForm/NoticeForm';
import InternalNotice from './pages/internalNotice/internalNotice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';
import MainLayout from './components/layout/MainLayout';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path='/' element={<Home />}/>
              <Route path="/comoajudar" element={<HowToHelp />} />
              <Route path='/contato' element={<Contact/>} />
              <Route path='/sobre' element={<About />} />
              <Route path='/criarNoticia' element={
                <PrivateRoute>
                  <NoticeForm />
                </PrivateRoute>
              }/>
              <Route path='/editarNoticia/:id' element={
                <PrivateRoute>
                  <NoticeForm />
                </PrivateRoute>
              }/>
              <Route path='/noticia/:id' element={<InternalNotice/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
