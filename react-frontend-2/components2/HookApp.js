import React, { useState, useCallback }from 'react'
import { useTransition, animated } from 'react-spring';
import Question from './Question';



const questions = [
  "I am the life of the party.",
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

const quests = questions.map((item, index, array) => {
  let hold;
  if (index % 2 === 0) {
    hold = true;
  } else {
    hold = false;
  }
  return (
    <Question
      key={index}
      number={index + 1}
      question={item}
      itemId={traits[index % 5]}
      polarity={hold}
      
      // onClick={this.onClick}
      // style={
      //     questionStyle
      //   }
    />
  );
});

// const pages = [
  // ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><Question /></animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

const colors = ['#EFB9CB','#F4DF47', '#B0DAF1', '#EDF67D', '#F6F930', '#99D19C'];



export default function HookApp(props) {
  // console.log('hooks', props)
  // console.log(colors[index % 5])
  const onClick1 = useCallback(() => set(state => (state + 1) % 20), [])
  const quests2 = questions.map((item, index, array) => {
    let hold;
    if (index % 2 === 0) {
      hold = true;
    } else {
      hold = false;
    }
    // console.log(colors[index % 5])
    // if(index !== 20){
      return (
        ({ style }) => <animated.div  style={{ ...style, background: colors[index % 5] }}><Question 
        key={index}
        number={index + 1}
        question={item}
        itemId={traits[index % 5]}
        polarity={hold}
        onClick={props.onClick}
        norms={props.norms}
        scoreO={props.scoreO}
        scoreE={props.scoreE}
        scoreC={props.scoreC}
        scoreA={props.scoreA}
        scoreES={props.scoreES}
        animate={onClick1}
        /></animated.div>
      )
    // } else {
      // return (
      //   ({ style }) => <animated.div  style={{ ...style, background: 'lightpink' }}><Question 
      //   key={index}
      //   number={index + 1}
      //   question={item}
      //   itemId={traits[index % 5]}
      //   polarity={hold}
      //   onClick={props.onClick}
      //   norms={props.norms}
      //   scoreO={props.scoreO}
      //   scoreE={props.scoreE}
      //   scoreC={props.scoreC}
      //   scoreA={props.scoreA}
      //   scoreES={props.scoreES}
      //   onSubmit2={props.onSubmit2}
      //   /></animated.div>
      // )
    // }

  });


  const [index, set] = useState(0)
  // const onClick1 = useCallback(() => set(state => (state + 1) % 20), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })

  return (
    <div  onClick={onClick1}>
    
    {transitions.map(({ item, props, key }) => {
      const Page = quests2[item]
      return <Page key={key} style={props} />
    })}
  </div>
  )
}

// <div>