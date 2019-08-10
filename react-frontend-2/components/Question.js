// import React from "react";

// export default function Question({ number, question, itemId, polarity, onClick }) {
//   console.log(number, question, itemId, polarity)
//   return (
//     <div>
//       <p> Question { number } </p>
//       <p>{ question }</p>
//       <button value={1} onClick={(e) => onClick(e)}>Very Inaccurate</button>
//       <button value={2} onClick={(e) => onClick(e)}>Moderately Inaccurate</button>
//       <button value={3} onClick={(e) => onClick(e)}>Neither Accurate Nor Inaccurate</button>
//       <button value={4} onClick={(e) => onClick(e)}>Moderately Accurate</button>
//       <button value={5} onClick={(e) => onClick(e)}>Very Accurate</button>
//     </div>
//   );
// }

// import React from 'react';
// import Button from './Button';



// export default function Question({ number, question, itemId, polarity, onClick }) {
  
//   const buttons = buttonVals.map((item, index, array) => {
//     <Button
//     key={index} 
//     val={item}
//     />
//   });

//   return (
    
//     <div>
//       <p> Question { number } </p>
//       <p>{ question }</p>
//       { buttons }
//     </div>
//   )
// }


// import React, { Component } from 'react';

// export class Question extends Component {
//   render() {
//     const { number, question, itemId, polarity, onChoose } = this.props;

//     const buttons = buttonVals.map((item, index, array) => {
//     return (
//     <Button
//     key={index} 
//     value={item}
//     itemId={itemId}
//     polarity={polarity}
//     onChoose={onChoose}
//     numVal={index + 1}
//     />
//     );
//   });
//     return (
//       <div>
//        <p> Question { number } </p>
//        <p>{ question }</p>
//       { buttons }
//       </div>
//     )
//   }
// }

// export default Question
import React, { Component } from 'react';
import Button from './Button';
const buttonVals = ['Very Inaccurate', 'Moderately Inaccurate', 'Neither Accurate Nor Inaccurate', 'Moderately Accurate', 'Very Accurate'];

const Question = ({ number, question, itemId, polarity, onChoose }) => {
  const buttons = buttonVals.map((item, index, array) => {
    return (
    <Button
    key={index} 
    value={item}
    itemId={itemId}
    polarity={polarity}
    onChoose={onChoose}
    numVal={index + 1}
    />
    );
    });

  return (
    <div>
      {buttons}
    </div>
  )
}

export default Question
