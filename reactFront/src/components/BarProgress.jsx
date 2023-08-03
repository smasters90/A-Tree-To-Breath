import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function BarProgress() {
  return (
    <progress className='progress__bar' id="file" max="8" value="1">10%</progress>     
  )
}

export default BarProgress