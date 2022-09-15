import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Homepage from "./Pages/Homepage/Homepage"
import Contactpage from "./Pages/Contactpage/Contactpage"
import Aboutpage from "./Pages/Aboutpage/Aboutpage"
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <Aboutpage/>
      <Contactpage/>
      <Footer/>
    </div>
  );
}

export default App;
