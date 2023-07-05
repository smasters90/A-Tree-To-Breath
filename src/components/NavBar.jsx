import  React, { useState } from 'react';
import logo from '../img/logo.png';
import {Link} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlineMenu } from 'react-icons/hi';
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
      <Link to={'/'}><img src={logo} className='logo img-fluid' /></Link>
      <div className='d-flex align-items-center mx-4'>
        <button variant="primary" onClick={handleShow} className="boton_menu  me-2"> 
          <HiOutlineMenu className='menu'/>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          </Offcanvas.Body>
        </Offcanvas>
      </div>  
    </header>
    </>
    
  )
}

export default NavBar