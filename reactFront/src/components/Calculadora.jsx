import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Pregunta from './Pregunta';
import Imagen from './Imagen';
import Boton from './Boton';


const URI = 'endpoint';

function Calculadora() {
  let arrayImagenes = [
    { id: 1, name: "/assets/iconoPreg1.png" },
    { id: 2, name: "/assets/logoMain2.png" },
    { id: 3, name: "/assets/iconoPreg1.png" },
  ];

  let [preguntas, setPreguntas] = useState([]);
  let [nameImagen, setNameImagen] = useState();
  let { ruta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let result = arrayImagenes.find(imagen => imagen.id === parseInt(ruta));
    setNameImagen(result.name);
    getPreguntas();
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

  async function getPreguntas (){
    const res = await axios.get(URI);
    setPreguntas(res.data);
  }
  return (
    <>
      <div className='cont__principal d-flex flex-wrap'>
        <Imagen nameImagen={nameImagen} />
        <div>
          {preguntas.map((pregunta)=> {
            if(ruta == pregunta.id && ruta+1 == pregunta.id){
              <Pregunta
              id = {pregunta.id}
              titulo = {pregunta.titulo}
              opc1 = {pregunta.opc1}
              opc2 = {pregunta.opc2}
              opc3 = {pregunta.opc3}
              opc4 = {pregunta.opc4}
              opc5 = {pregunta.opc5}  
            />
            }            
            }) 
          }
          
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
