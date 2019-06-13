import React, { Component } from "react";
import Question from "./Question";
import Result from "./Results";
import TestComponent from './Result';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testOneNorm: {
        Openness: 0,
        Conscientiousness: 0,
        Extraversion: 0,
        Agreeableness: 0,
        EmotionalStability: 0
      },
      Openness: 0,
      Conscientiousness: 0,
      Extraversion: 0,
      Agreeableness: 0,
      EmotionalStability: 0
    };

    this.onClick = this.onClick.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }
  onClick(e, itemId, polarity) {
    // console.log('test', e.target.value);
    // console.log('item Number', itemId);
    // console.log('polarity', polarity);
    // console.log('state', this.state)
    e.preventDefault();
    let updatedValue;
    if (!polarity) {
      updatedValue = 6 - Number(e.target.value);
    } else {
      updatedValue = Number(e.target.value);
    }
    // console.log('typeof', typeof updatedValue)
    this.setState({
      [itemId]: this.state[itemId] + updatedValue
    });
    console.log(this.state)
  }

  onSubmit2(e) {
    // console.log("testing submit2", e);
    // e.preventDefault();
    // console.log(this.state);
    const {
      Openness,
      Conscientiousness,
      Extraversion,
      Agreeableness,
      EmotionalStability
    } = this.state;

    const testOneRes = {
      Openness,
      Conscientiousness,
      Extraversion,
      Agreeableness,
      EmotionalStability
    };

    // NECESSARY FOR POSTING DATA DO NOT EDIT
    // fetch("http://localhost:5000/testone/testonelastitem", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(testOneRes)
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log('Data submitted, thank you for participating!', res);
    //   });
  }

  componentDidMount() {
    fetch("http://localhost:5000/testone/testonenorms")
      .then(res => res.json())
      .then(res => {
        res = JSON.parse(res);
        // console.log(typeof res);
        const { OpennessNorm, ConscientiousnessNorm, ExtraversionNorm, AgreeablenessNorm, EmotionalStabilityNorm } = res;
        // OpennessNorm: 13.59, ConscientiousnessNorm: 11.67, ExtraversionNorm: 10.13, AgreeablenessNorm: 13.48, EmotionalStabilityNorm: 6.57}
        // console.log(res)
        this.setState({
         testOneNorm: {
          OpennessNorm,
          ConscientiousnessNorm,
          ExtraversionNorm,
          AgreeablenessNorm,
          EmotionalStabilityNorm,
         }   
        });
      })
  }
  render() {
    // console.log('rerender', this.state)
    const questions = [
      "I am the life of the party.",
      "I feel little concern for others.",
      "I am always prepared.",
      "I get stressed out easily.",
      "I have a rich vocabulary.",
      "I don't talk a lot.",
      "I am interested in people.",
      "Leave my belongings around.",
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
    const holdNorms = {
      OpennessNorm: 13.59,
      ConscientiousnessNorm: 11.67,
      ExtraversionNorm: 10.13,
      AgreeablenessNorm: 13.48,
      EmotionalStabilityNorm: 6.57
    }
        // testing format { OpennessNorm: 13.59,
    //   ConscientiousnessNorm: 11.67,
    //   ExtraversionNorm: 10.13,
    //   AgreeablenessNorm: 13.48,
    //   EmotionalStabilityNorm: 6.57 }
    for (let i = 0; i < questions.length; i++) {
      // console.log(questions[i], i, i % 5);
    }
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
          onClick={this.onClick}
        />
      );
    });
    console.log('hold norms', holdNorms)
    console.log('openness', this.state.Openness)
    console.log('extra', this.state.Extraversion)
    console.log('consc', this.state.Conscientiousness);
    console.log('agree', this.state.Agreeableness)
    console.log('es', this.state.EmotionalStability)

    let hold = <Result 
    norms={holdNorms}
    scoreO={this.state.Openness} 
    scoreE={this.state.Extraversion} 
    scoreC={this.state.Conscientiousness} 
    scoreA={this.state.Agreeableness} 
    scoreES={this.state.EmotionalStability} 
    />
    return (
      <div className="wrapper">
        <div className="pers-form">
          <h1> Fill out the form! </h1>
          <form noValidate>{quests}</form>
          <button name="test" onClick={e => this.onSubmit2(e)}>
            Submit
          </button>
          {/* <Result 
          // norms={this.state.testOneNorm} 
          norms={holdNorms}
          scoreO={this.state.Openness} 
          scoreE={this.state.Extraversion} 
          scoreC={this.state.Conscientiousness} 
          scoreA={this.state.Agreeableness} 
          scoreES={this.state.EmotionalStability} 
          /> */}
          {/* { hold } */}
          <TestComponent
              norms={holdNorms}
              scoreO={this.state.Openness} 
              scoreE={this.state.Extraversion} 
              scoreC={this.state.Conscientiousness} 
              scoreA={this.state.Agreeableness} 
              scoreES={this.state.EmotionalStability}
          />
        </div>
      </div>
    );
  }
}

export default App;
//  name="test" onSubmit={this.onSubmit}
// componentDidMount(){
//   fetch('http://localhost:5000/testone/results')
//   .then(res => res.text())
//   .then(res => this.setState({ message: res }));
// }

// componentDidMount(){
//   fetch('http://localhost:5000/testone/testonelastitem', {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(this.state.testOneRes)
//   })
//   .then(res => res.json())
//   .then(res => { console.log(res); });
// }

//     fetch('http://localhost:5000/testone/testonelastitem', {
//   method: "POST",
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify(this.state.testOneRes)
// })
// .then(res => res.json())
// .then(res => { console.log(res); });

// export class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       message: "",
//       testOneRes: {
//         "Openness": 30,
//         "Conscientiousness": 40,
//         "Extraversion": 50,
//         "Agreeableness": 65,
//         "EmotionalStability": 70
//       },
//       counter: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick (e) {
//     console.log(e)
//     this.setState({
//       counter: this.state.counter + 1,
//     })
//     // console.log('click', this.state)
//     fetch('http://localhost:5000/testone/testonelastitem', {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(this.state.testOneRes)
//     })
//     .then(res => res.json())
//     .then(res => { console.log(res); });
//   };

//   render() {
//     return (
//       <div>
//         Hello!!!!!
//         {this.state.counter}
//         <button onClick={this.handleClick}>Test</button>
//       </div>
//     )
//   }
// }

// export default App

// onSubmit(e) {
//   // console.log(e);
//   e.preventDefault();
//   // console.log(this.state);
//   const {
//     Openness,
//     Conscientiousness,
//     Extraversion,
//     Agreeableness,
//     EmotionalStability
//   } = this.state;
//   const testOneRes = {
//     Openness,
//     Conscientiousness,
//     Extraversion,
//     Agreeableness,
//     EmotionalStability
//   };
// console.log("onsubmit name", e);
// if(e.target.name === 'test') {
//   console.log('testing on submit', testOneRes);
// }
// }

// this.handleClick = this.handleClick.bind(this);
// this.onSubmit = this.onSubmit.bind(this);
// onSubmit={this.onSubmit}
