import React from 'react'
import SobreNosotros from './SobreNosotros'
import Boton from './Boton'

function Main() {
  return (
    <>
    <div className='d-flex flex-column flex-xl-row'>
      <div className='d-flex flex-column'>
        <SobreNosotros />
        <Boton className="boton__main" extension={`/calculadora/${1}`} nombre="CALCULATE >" clase="boton__main"/>
      </div>
      <div className='cont__img d-flex flex column justify-content-center col-xl-4'>
        <img src={"/assets/Steps_.png"} className='logo__main-steps img-fluid'/>
        <img src={"/assets/GoGreenForest.png"} className='logo__main-tree img-fluid'/>
      </div>
    </div>
    
  </>
  )
}

export default Main