import React from 'react'


export default function Button({ value, itemId, polarity, onClick, numVal }) {
  const colors = ['#C287E8', '#AAAE7F', '#FFC09F', '#ADF7B6', '#4B719C', '#A8D0DB'];
  // console.log('itemid', numVal)
  return (  
    <div className="button-container">
    <button className="button" style={{backgroundColor: colors[numVal]}} value={ numVal } onClick={(e) => onClick(e, itemId, polarity)}> { value }</button>
    </div>
  )
}

// '#EFB9CB','#F4DF47', '#B0DAF1', '#EDF67D', '#F6F930', '#99D19C', 