import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Homepage from "./Pages/Homepage/Homepage";
import Contactpage from "./Pages/Contactpage/Contactpage";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Footer from "./Components/Footer/Footer"
import Businessdev from './Pages/Businessdevelopment/Businessdev';
import Realestate from './Pages/Realestate/Realestate';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Aboutpage' element={
            <ProtectedRoute>
              <Aboutpage/>
            </ProtectedRoute>
          
          } />
          <Route path='Contactpage' element={<Contactpage/>} />
          <Route path='Businessdev' element={<Businessdev/>} />
          <Route path='Realestate' element={<Realestate/>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
