import React from 'react';
import { Radar } from 'react-chartjs-2';

export default function Result({ norms, scoreO, scoreE, scoreC, scoreA, scoreES }) {
  // console.log('testing props from test component TESTING NORMS', norms)

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
        label: "Your Score",
        backgroundColor: "rgb(237,33,124, 0.9)",
        data: [
          scoreO,
          scoreC,
          scoreE,
          scoreA,
          scoreES,
        ]
      },
      {
        label: "Average Score",
        backgroundColor: "rgba(20,255,247, 0.5)",
        
        data: [
          norms.OpennessNorm,
          norms.ConscientiousnessNorm,
          norms.ExtraversionNorm,
          norms.AgreeablenessNorm,
          norms.EmotionalStabilityNorm,
        ],
      },
    ],
  };
  // options: {
  //   scale: {
  //     pointLabels: {
  //       fontSize: 20,
  //   },
  // }
  const options = {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Comparison of your score versus a large sample'
    },
    scale: {
      reverse: false,
      gridlines: {
        color: [
          'black',
          'red',
        ],
        pointLabels: {
          fontSize: '50px',
        },
      }
    },
    padding: {
      // top: 5,
      // bottom: 5,
    },
    borderColor: "rgba(255,255,255,0)",
    titleFontSize: '16px',
    toolTips: {
      titleFontSize: '24',
    },
    ticks: {
      beginAtZero: true,
    }
  };

  return (
    <div className="chart">
      <Radar
      data={data}
      options={options}
      />
    </div>
  )
}