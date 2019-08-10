import React, { useState } from 'react'
import QuestionsRadar from './QuestionsRadar';
import Question from './Question';
import { Transition, animated } from 'react-spring/renderprops';

const questions = [
  style => "I am the life of the party.",
  "I feel little concern for others.",
  "I am always prepared.",
  "I get stressed out easily.",
  "I have a rich vocabulary.",
  "I don't talk a lot.",
  "I am interested in people.",
  "I Leave my belongings around.",
  "I am relaxed most of the time.",
  "I have difficulty understanding abstract ideas.",
  "I feel comfortable around people.",
  "I insult people.",
  "I pay attention to details.",
  "I worry about things.",
  "I have a vivid imagination.",
  "I keep in the background.",
  "I sympathize with others' feelings.",
  "I make a mess of things.",
  "I seldom feel blue.",
  "I am not interested in abstract ideas."
];

const traits = [
  "Extraversion",
  "Agreeableness",
  "Conscientiousness",
  "EmotionalStability",
  "Openness"
];

const QuestionsDisplay = ({ onChoose, questionIndex, sectionChange }) => {
  // console.log('testing props',props)
  let hold;
  if (questionIndex % 2 === 0) {
    hold = true;
  } else {
    hold = false;
  }
  if(questionIndex !== 20) {
      return (
    <>

      <Transition 
      native
      reset
      unique
      items={questionIndex}
      from={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
      leave={{ opacity: 0, transform: '(translate3d(-50%, 0, 0)' }}
      >
      {/* {index => questions[index]} */}
      
      {questionIndex + 1}{" "}{questions[questionIndex]}
      <Question 
      onChoose={onChoose}
      polarity={hold}
      itemId={traits[questionIndex % 5]}
      />
      </Transition>
    </>
    )
       } else {
         console.log('did we get here?')
    return (
      <button onClick={sectionChange}>Move On</button>
    )
  };
}

export default QuestionsDisplay
//   ) : (
    //     <button onClick={sectionChange}>Move On</button>
    //   )
  // }  