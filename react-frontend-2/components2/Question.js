// import React, { useState, useCallback } from 'react'
// import { useTransition, animated } from 'react-spring';
// import Button from './Button';
// import './style.css';


// const pages = [
//   ({ styles }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//   ({ styles }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ styles }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

// export default function Question({ number, question, itemId, polarity, onClick }) {
//   const [index, set] = useState(0)
//   const onClick1 = useCallback(() => set(state => state + 1) % 3, []);
//   const transitions = useTransition(index, p => p, {
//     from: { opacity: 0, transform: 'translate3d(100%, 0, 0)'},
//     enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)'},
//     leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)'},   
//   })

//   const buttonVals = ['Very Inaccurate', 'Moderately Inaccurate', 'Neither Accurate Nor Inaccurate', 'Moderately Accurate', 'Very Accurate'];

//   const buttons = buttonVals.map((item, index, array) => {
//     return (
//     <Button
//     key={index} 
//     value={item}
//     itemId={itemId}
//     polarity={polarity}
//     onClick={onClick}
//     numVal={index + 1}
//     />
//     );
//   });
//   return (
//     // <div className="question">
//     //  <p> Question { number } </p>
//     //  <p>{ question }</p>
//     // { buttons }
//     // </div>
//     <div className="simple-trans-main" onClick={onClick1}>
//     {transitions.map(({ item, props, key }) => {
//       const Page = pages[item]
//       return <Page key={key} style={props} />
//     })}
//   </div>
//   )
// }


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
// const divStyles = {
//   width: '100%',
//   backgroundColor: 'blue',
//   height: '100vh',
// }

import React, { Component } from 'react';
import Button from './Button';
import './style.css';
import Result from './Result';
import FinalButton from './FinalButton';

export class Question extends Component {
  render(props) {
    // console.log('question', this.props);
    
    const { number, question, itemId, polarity, onClick, norms, scoreO, scoreE, scoreC, scoreA, scoreES } = this.props;
    const buttonVals = ['Very Inaccurate', 'Moderately Inaccurate', 'Neither Accurate Nor Inaccurate', 'Moderately Accurate', 'Very Accurate'];

    const buttons = buttonVals.map((item, index, array) => {
    return (
    <Button
    key={index} 
    value={item}
    itemId={itemId}
    polarity={polarity}
    onClick={onClick}
    numVal={index + 1}
    />
    );
  });
    return (
      // <div style={{height: '100vh'}}>
      <div className="test">
        <div className="items">
       <p> Question { number } </p>
       <p>{ question }</p>
      { buttons }
      </div>
      <Result 
            norms={norms}
            scoreO={scoreO}
            scoreE={scoreE}
            scoreC={scoreC}
            scoreA={scoreA}
            scoreES={scoreES}
      />
      </div>
    )
  }
}

export default Question
