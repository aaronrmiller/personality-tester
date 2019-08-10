import React from 'react'

export default function Button({ value, itemId, polarity, onChoose, numVal }) {
  // console.log('testing props', itemId)
  

  return (  
    <>
    <button value={ numVal } onClick={(e) => onChoose(e, itemId, polarity)}> { value }</button>
    </>
  )
}

// {/* <p> {  }</p> */}
//       {/* <button>{  }</button> */}