import React, { Component } from "react";
import { useTransition, animated } from "react-spring";
import Question from "./Question";
import Result from "./Result";
import Begin from "./Begin";
import "./style.css";
import HookApp from "./HookApp";
import Final from "./Final";

// const questionStyle = {
//   width: '100%',
//   height: '100vh',
//   backgroundColor: 'cyan',

// }

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
      EmotionalStability: 0,
      content: false,
      content1: 0,
      content2: [<Begin />, <HookApp />, <Final />]
      // content2: {
      //   begin: <Begin />,
      //   test: <HookApp />,
      //   final: <Final />,
      // }
    };

    this.onClick = this.onClick.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.renderingInput = this.renderingInput.bind(this);
  }
  displayContent(e) {
    // console.log("testing");
    e.preventDefault();
    // this.setState({ content: !this.state.content })
    this.setState({ content1: this.state.content1 + 1 });
  }

  onClick(e, itemId, polarity) {
    e.preventDefault();
    let updatedValue;
    if (!polarity) {
      updatedValue = 6 - Number(e.target.value);
    } else {
      updatedValue = Number(e.target.value);
    }
    this.setState({
      [itemId]: this.state[itemId] + updatedValue
    });
    // console.log(this.state);
  }

  onSubmit2(e) {
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
    this.setState({ content1: this.state.content1 + 1 });
    // console.log("testing onSubmit2");
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
        const {
          OpennessNorm,
          ConscientiousnessNorm,
          ExtraversionNorm,
          AgreeablenessNorm,
          EmotionalStabilityNorm
        } = res;

        this.setState({
          testOneNorm: {
            OpennessNorm,
            ConscientiousnessNorm,
            ExtraversionNorm,
            AgreeablenessNorm,
            EmotionalStabilityNorm
          }
        });
      });
  }

  renderingInput() {
    if (this.state.content1 === 0) {
      return <Begin displayContent={this.displayContent} />;
    } else if (this.state.content1 === 1) {
      return (
        <HookApp
          onClick={this.onClick}
          norms={this.state.testOneNorm}
          scoreO={this.state.Openness}
          scoreE={this.state.Extraversion}
          scoreC={this.state.Conscientiousness}
          scoreA={this.state.Agreeableness}
          scoreES={this.state.EmotionalStability}
          onSubmit2={this.state.onSubmit2}
        />
      );
    } else {
      return <Final />;
    }
  }
  render() {
    // console.log('state',this.state);
    return (
      <div className="wrapper">
        {/* <div className="pers-form"> */}
        {/* {
            !this.state.content ? 
            (
            <Begin 
            displayContent={this.displayContent}
            />
            )
            :
            (
            <HookApp 
            onClick={ this.onClick }
            norms={this.state.testOneNorm}
            scoreO={this.state.Openness}
            scoreE={this.state.Extraversion}
            scoreC={this.state.Conscientiousness}
            scoreA={this.state.Agreeableness}
            scoreES={this.state.EmotionalStability}
          />
            )
          } */}
        {this.renderingInput()}
        {/* <Result
          norms={this.state.testOneNorm}
          scoreO={this.state.Openness}
          scoreE={this.state.Extraversion}
          scoreC={this.state.Conscientiousness}
          scoreA={this.state.Agreeableness}
          scoreES={this.state.EmotionalStability}
        /> */}
      </div>
    );
  }
}

export default App;

// import React, { useState, useCallback } from 'react'
// import { useTransition, animated } from 'react-spring'

// const pages = [
//   ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>DASDF</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

// export default function App() {
//   const [index, set] = useState(0)
//   const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//   const transitions = useTransition(index, p => p, {
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   return (
//     <div className="simple-trans-main" onClick={onClick}>
//       {transitions.map(({ item, props, key }) => {
//         const Page = pages[item]
//         return <Page key={key} style={props} />
//       })}
//     </div>
//   )
// }

// displayContent (e) {
//   console.log('testing')
//   e.preventDefault();
//   this.setState({ content: !this.state.content })
// }
// this.displayContent = this.displayContent.bind(this);
