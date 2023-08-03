import React from 'react'

function NavigateButton({func, name, nameClass}) {
  return (
    <>
        <button onClick={func} className={nameClass}> {name}</button>
    </>
    
  )
}

export default NavigateButton