import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvier from './context/cartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Calculadora from './components/Calculadora';
import Main from './components/Main';
import './scss/style.css';
import { BrowserRouter , Route,Routes, Link} from 'react-router-dom';

function App() {
  return (
    <CartContextProvier>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/calculadora/:ruta" element={<Calculadora />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvier>
  );
}

export default App;
