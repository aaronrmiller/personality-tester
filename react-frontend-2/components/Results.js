import React, { Component } from 'react';
// import { Radar } from 'react-chartjs';
import { Radar } from 'react-chartjs-2';
// import CircularGridLines from 'plot/circular-grid-lines';



export class Result extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log('testing props', props);
    // console.log('testing norms', props.norms, props.scoreO)
    // const data = [
    //   10,
    //   15,
    //   20,
    //   40,
    //   30
    // ]
    const data = {
      labels: [
        "Openness",
        "Conscientiousness",
        "Extraversion",
        "Agreeableness",
        "EmotionalStability",
      ],
      datasets: [
        {
          label: "Average Score",
          data: [

          ]
        }
      ]
    }
    return (
    <h1>test</h1>
    // <div className="chart">
    //   <Radar
    //   data={data}
    //   />
    // </div>
    )
  }
}

export default Result

// <div>
      /* <h1> Personality Test Description: </h1>
      <p> The personality test you just took measured you along five dimensions. These five dimensions form what is referred to as the "Big Five". The five traits are: Extraversion, Agreeableness, Conscientiousness, Emotional Stability, Openness to Experience.</p>
      <h1>Your results:</h1>
      <h3>Extraversion:</h3> */
      /* <p> You scored {scoreE}, while the average is {norms.Extraversion} </p> */
    // </div>