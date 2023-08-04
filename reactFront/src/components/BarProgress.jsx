import React from "react";
import PropTypes from 'prop-types'

function BarProgress({value, max}) {
  return (
    <progress value={value} max={max} />  
  )
}

BarProgress.popTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
}

BarProgress.defaultProps = {
  max: 100,
}

export default BarProgress;
