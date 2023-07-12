import React from 'react'
import SobreNosotros from './SobreNosotros'
import Boton from './Boton'

function Main() {
  return (
    <>
    <div className='d-flex flex-column flex-xl-row'>
      <div className='d-flex justify-content-center col-xl-4'>
        <img src={"/assets/logoMain2.png"} className='logo__main img-fluid' />
      </div>
      <div className='d-flex flex-column'>
        <SobreNosotros />
        <Boton className="boton__main" extension={`/calculadora/${1}`} nombre="Calcula tu impacto" clase="boton__main"/>
      </div>
    </div>
    
  </>
  )
}

export default Main