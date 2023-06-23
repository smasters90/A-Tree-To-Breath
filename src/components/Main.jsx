import React from 'react'
import SobreNosotros from './SobreNosotros'
import Boton from './Boton'

function Main() {
  return (
    <div className='d-flex'>
      <img src={"/assets/logoMain.png"} className='logo__main img-fluid' />
      <SobreNosotros />
      <Boton className="boton__main" extension="/calculadora" nombre="Calculadora" clase="boton__main"/>

    </div>
  )
}

export default Main