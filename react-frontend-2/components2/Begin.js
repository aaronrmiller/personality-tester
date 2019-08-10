import React from 'react'
import './style.css'

export default function Begin ( { displayContent }) {
  return (
    <div className='test'>
     <h1> Fill out the survey!</h1>
     <p>P.S: This is not a clinical measure. It is a general measure. It cannot be used to diagnose abnormal personality and will not reveal any underlying issues!). </p> 
     <p>P.P.S: Don't overthink items. Just answer them as honestly as possible. </p>
     <button onClick={(e) => displayContent(e) }> I'm ready, let's do this! </button>
    </div>
  )
}
