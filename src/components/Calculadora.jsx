import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Pregunta from './Pregunta';
import Imagen from './Imagen';
import Boton from './Boton';

function Calculadora() {
  let arrayImagenes = [
    { id: 1, name: "/assets/iconoPreg1.png" },
    { id: 2, name: "/assets/logoMain2.png" },
    { id: 3, name: "/assets/iconoPreg1.png" },
  ];

  let [nameImagen, setNameImagen] = useState();
  let { ruta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let result = arrayImagenes.find(imagen => imagen.id === parseInt(ruta));
    setNameImagen(result.name);
    console.log(typeof ruta)
    console.log(result.name)
  },[ruta]);


  function handleUp() {
    ruta = parseInt(ruta) +1;
    navigate(`/calculadora/${ruta}`)
  }

  function handleDown() {
    if (ruta == 1) {
      ruta = 1;
    } else {
      ruta = ruta-1;
    }
    navigate(`/calculadora/${ruta}`)
  }

  return (
    <>
      <div className='cont__principal d-flex flex-wrap'>
        <Imagen nameImagen={nameImagen} />
        <div>
          <Pregunta />
          <Pregunta />
        </div>
        <div className='d-flex flex-row align-items-center mb-3 cont__boton '>
          <button onClick={handleDown} className="boton__cal" > <p className='nombre__boton me-5'>ATRAS</p> </button>
          <button onClick={handleUp} className="boton__cal " > <p className='nombre__boton me-5 ps-4 ms-2'>SIGUIENTE</p> </button>
        </div>
      </div>
    </>
  );
}

export default Calculadora;
