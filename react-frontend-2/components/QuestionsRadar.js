import { Radar } from 'react-chartjs-2';
import React from 'react'

export default function TestComponent({ testOneNorm, testOneScores }) {
  // console.log('testing props from test component TESTING NORMS', norms)
  console.log('testing radar chart data', testOneNorm)
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
          testOneScores.Openness,
          testOneScores.Conscientiousness,
          testOneScores.Extraversion,
          testOneScores.Agreeableness,
          testOneScores.EmotionalStability,
        ]
      },
      {
        label: "Average Score",
        backgroundColor: "rgba(20,255,247, 0.5)",
        
        data: [
          testOneNorm.OpennessNorm,
          testOneNorm.ConscientiousnessNorm,
          testOneNorm.ExtraversionNorm,
          testOneNorm.AgreeablenessNorm,
          testOneNorm.EmotionalStabilityNorm,
        ],
      },
    ]
  };

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
        ]
      }
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