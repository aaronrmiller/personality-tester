import React, { Component } from 'react'
import IntroductionDisplay from './IntroductionDisplay';
import ResultsDisplay from './ResultsDisplay';
import QuestionsDisplay from './QuestionsDisplay';
import QuestionsRadar from './QuestionsRadar';

export default class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionCount: 0,
      questionIndex: 0,
      testOneScores: {
        Openness: 0,
        Conscientiousness: 0,
        Extraversion: 0,
        Agreeableness: 0,
        EmotionalStability: 0,
      }
    };
    
    this.sectionChange = this.sectionChange.bind(this);
    this.onChoose = this.onChoose.bind(this);
  }
  
  sectionChange () {
    this.setState({
      sectionCount: this.state.sectionCount += 1,
    })
  }

  onChoose(e, itemId, polarity) {
    e.preventDefault();
    let updatedValue;
    if (!polarity) {
      updatedValue = 6 - Number(e.target.value);
    } else {
      updatedValue = Number(e.target.value);
    }
    console.log('testing id', itemId, 'e', e, 'polarity', polarity)
    this.setState({
      testOneScores: {
        ...this.state.testOneScores,
        [itemId]: this.state.testOneScores[itemId] + updatedValue
      },
      questionIndex: this.state.questionIndex += 1,
    });
    // console.log(this.state);
  }
  
  render() {
    console.log('testing props maindisplay', this.props, this.state)
    const { testOneNorm } = this.props;
    const sections = [
    <IntroductionDisplay 
    sectionChange={this.sectionChange} 
    />, 
    <QuestionsDisplay 
    testOneNorm={testOneNorm}
    testOneScores={this.state.testOneScores}
    onChoose={this.onChoose}
    questionIndex={this.state.questionIndex}
    sectionChange={this.sectionChange}
    />, 
    <ResultsDisplay 
    />
    ];
    return (
      <div>
        {sections[this.state.sectionCount]}
        {this.state.sectionCount === 1 ? <QuestionsRadar 
          testOneNorm={testOneNorm}
          testOneScores={this.state.testOneScores}
        /> : null}
        
      </div>
    )
  }
};
