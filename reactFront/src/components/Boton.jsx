import React from 'react'
import { Link } from 'react-router-dom'

function Boton({extension, nombre, clase}) {
  
  return (
    <div className='d-flex flex-row align-items-center justify-content-end mb-4 mx-4'>
      <Link to={extension} className={clase} style={{ textDecoration: 'none' }}>
        <p className='nombre__boton'>{nombre}</p>
      </Link>
    </div>

  )
}

export default Boton