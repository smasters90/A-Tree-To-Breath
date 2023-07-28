import  React, { useState } from 'react';
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let contenedor;
  let location = useLocation();
  
  if(location.pathname=="/calculadora"){
    contenedor = "header__2"
  } else {
    contenedor = "header"
  }

  return (
    <>
    <header className={`${contenedor} d-flex flex-row justify-content-between align-items-center`}>
      <p>Calculadora huella de carbono</p>
      <Link to={'/'}><img src={logo} className='logo img-fluid' /></Link> 
    </header>
    </>
    
  )
}

export default NavBar