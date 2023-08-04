import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Pregunta from './Pregunta';
import Imagen from './Imagen';
import NavigateButton from './NavigateButton';
import BarProgress from './BarProgress';


const URI = 'http://localhost:8080';

function Calculadora() {
  let arrayImagenes = [
    { id: 1, name: "/assets/iconoPreg1.png" },
    { id: 2, name: "/assets/logoMain2.png" },
    { id: 3, name: "/assets/iconoPreg1.png" },
  ];

  let [preguntas, setPreguntas] = useState([]);
  let [nameImagen, setNameImagen] = useState();
  let [value, setValue] = useState(10);

  let { ruta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let result = arrayImagenes.find(imagen => imagen.id === parseInt(ruta));
    setNameImagen(result.name);
    setValue((ruta*10))
    console.log(value)
    /*getPreguntas();*/
  },[ruta]);


  function handleNext() {
    ruta = parseInt(ruta) +1;
    navigate(`/calculadora/${ruta}`)
  }

  function handleBack() {
    if (ruta == 1) {
      ruta = 1;
    } else {
      ruta = ruta-1;
    }
    navigate(`/calculadora/${ruta}`)
  }

  /*async function getPreguntas (){
    const res = await axios.get(URI);
    setPreguntas(res.data);
  }*/
  return (
    <>
      <div className='cont__principal d-flex flex-wrap'>
        <Imagen nameImagen={nameImagen} />
        <BarProgress value max={100}/>
        <div>

        </div>
        <div className='d-flex flex-row align-items-center mb-3 cont__boton '>
          <NavigateButton nameClass="boton__cal-back" func={handleBack} name="< BACK" />
          <NavigateButton nameClass="boton__cal-next" func={handleNext} name="NEXT >"/>
        </div>
      </div>
    </>
  );
}

export default Calculadora;
