import React from 'react'

export default function Button({ value, itemId, polarity, onClick, numVal }) {
  // console.log('testing props', itemId)
  

  return (  
    <>
    <button value={ numVal } onClick={(e) => onClick(e, itemId, polarity)}> { value }</button>
    </>
  )
}

// {/* <p> {  }</p> */}
//       {/* <button>{  }</button> */}