import React from 'react'
import { Link } from 'react-router-dom'

function Boton({extension, nombre, clase}) {

  return (
    <Link to={extension} className={clase} >
        {nombre}
    </Link>
  )
}

export default Boton