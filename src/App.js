import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"
import Contactpage from "./Pages/Contactpage/Contactpage"
import Aboutpage from "./Pages/Aboutpage/Aboutpage"
import Footer from "./Components/Footer/Footer"
import Businessdev from './Pages/Businessdevelopment/Businessdev';
import Realestate from './Pages/Realestate/Realestate';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Aboutpage' element={<Aboutpage/>} />
        <Route path='Contactpage' element={<Contactpage/>} />
        <Route path='Businessdev' element={<Businessdev/>} />
        <Route path='Realestate' element={<Realestate/>} />
      </Routes>
      
    </div>
  );
}

export default App;
