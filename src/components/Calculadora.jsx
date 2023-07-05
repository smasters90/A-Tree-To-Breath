import React, { useEffect, useState } from 'react'
import Pregunta from './Pregunta'
import Imagen from './Imagen';
import { useParams } from 'react-router-dom';

function Calculadora() {

  let arrayImagenes=[{id:1,name:"/assets/iconoPreg1.png"}, {id:2, name:"/assets/logoMain2.png"}]
  let [nameImagen, setNameImagen] = useState();
  let {ruta} = useParams();


  useEffect(()=>{
    const result = arrayImagenes.find(imagen => imagen.id == ruta)
    setNameImagen(result.name);
  },{ruta})


  return (
    <>
    <div className='cont__principal d-flex'>
      <Imagen nameImagen = {nameImagen}/>
      <div>
        <Pregunta />
        <Pregunta />
      </div>
      
    </div>
      
    </>
    
  )
}

export default Calculadora