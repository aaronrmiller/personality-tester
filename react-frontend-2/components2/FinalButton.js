import React from 'react'

export default function FinalButton({ value, itemId, polarity, onClick, numVal, onSubmit2}) {
  return (  
    <>
    <button value={ numVal } onClick={(e) => onClick(e, itemId, polarity)} onSubmit={(e) =>onSubmit2(e)}> { value }</button>
    </>
  )
}