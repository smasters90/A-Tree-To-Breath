import React from 'react'
import { useLocation } from "react-router-dom";

function Footer() {

  let contenedor;
  let location = useLocation();
  
  if(location.pathname=="/calculadora"){
    contenedor = "footer__2"
  } else {
    contenedor = "footer"
  }

  return (
    <footer className={`${contenedor} d-flex flex-column p-2  flex-xl-row justify-content-xl-between align-items-center`}>
        <h6 className="text-center"> © 2023 A Tree To Breath. Reservados todos los derechos.</h6>
        <div className="footer__cont--img d-flex flex-row col-10 align-items-center justify-content-center gap-5 col-lg-6 col-md-6 col-xl-4  justify-content-xl-end pe-xl-4">
            <a href="https://www.facebook.com/atreetobreathe" className="icon_social" target="_blank"><img className="img-fluid" src='/assets/face.png' /></a>
            <a href="https://www.instagram.com/atreetobreathe/" target="_blank" className="icon_social"><img className="img-fluid" src="/assets/instagram.png" /></a>
            <a href="https://www.twitter.com/" target="_blank" className="icon_social"><img className="img-fluid" src="/assets/twt.png" /></a>
        </div>  
    </footer>
  )
}

export default Footer