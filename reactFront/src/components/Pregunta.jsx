import React from 'react';
import { useState } from 'react';


function Pregunta() {
  let [value, setValue] = useState(1);


  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
    console.log(value)
  };

  return (
    <>
      <div className='contenedor__principal-preguntas'>
        <div className='contenedor__pregunta'>
          <p className='titulo__pregunta'>¿Qué distancia semanal realizás en colectivo?</p>
        </div>
        <input className='respuesta__input' type="range" value={value} onChange={handleChange} min={1} max={5} aria-labelledby="continuous-slider"/>
        <div className='contenedor__respuesta-span'>
          <span className='respuesta__span'>0-50 km</span>
          <span className='respuesta__span'>50-100 km</span>
          <span className='respuesta__span'>100-150 km</span>
          <span className='respuesta__span'>150-200km</span>
          <span className='respuesta__span'>+ 200 km</span>
        </div>
        
      </div>
    </>
    
  )
}

export default Pregunta