import React from "react";
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Container = Styled.div`
  
  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 9px;
    width: 111px;
    border-radius: 5px;
    background-color: #dadddd;
  }

  progress[value]::-webkit-progress-value {
    height: 9px;
    width: 111px;
    border-radius: 5px;
    background-color: ${props => props.color};
  } 
`;

function BarProgress({ value, max, color, width, ruta }) {
  return (
    <Container className="d-flex " color={color} width={width}>
      <span className="span__BarProgress">Q{ruta} of 10</span>
      <progress value={value} max={max} /> 
    </Container>
  );
}

BarProgress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
}

BarProgress.defaultProps = {
  max: 100,
  color: '#8D9A08',
  width: '111px',
  
}

export default BarProgress;
