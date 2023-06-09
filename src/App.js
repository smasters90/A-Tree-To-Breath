import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvier from './context/cartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calculadora from './components/Calculadora';
import Principal from './components/Principal';
import './scss/style.css';
import { BrowserRouter , Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <CartContextProvier>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/principal' element={<Principal />}/>
          <Route path="/calculadora" element={<Calculadora />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvier>
  );
}

export default App;
