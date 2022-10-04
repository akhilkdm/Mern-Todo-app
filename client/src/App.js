import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import HomePage from './pages/homePage/HomePage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
