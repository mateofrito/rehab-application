import React, { Component } from 'react'
import { QuestionListChoice } from './QuestionListChoice';


export default class QuestionList extends Component {

  render() {
    return (
      <div className="questionDiv">
      <p>Questions</p>
        <select className='questionListChoice'>
        <QuestionListChoice questions = {this.props.questions} />
      
        </select>
      </div>
    );
  }
}