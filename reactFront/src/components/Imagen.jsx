import React from 'react'

function Imagen({nameImagen}) {
  return (
    <>
        <div className='contenedor__principal-img d-flex align-items-center'>
            <img src={nameImagen}></img>
        </div>
    </>
  )
}

export default Imagen