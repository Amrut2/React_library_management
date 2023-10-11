// src/Quiz.js

import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './TakeQuiz.css';
const dummyQuestions = [
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },

  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },

  

];



class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      selectedOption: '',
      score: 0,
      showResult: false,
    };
  }


  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };



  handleSubmit = (e) => {
    e.preventDefault();
    const { currentQuestion, selectedOption, score } = this.state;
    const correctAnswer = dummyQuestions[currentQuestion].correctAnswer;



    if (selectedOption === correctAnswer) {
      this.setState({ score: score + 1 });
    }



    if (currentQuestion < dummyQuestions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: '',
      });
    } else {
      this.setState({ showResult: true });
    }

  };



  render() {
    const {
      currentQuestion,
      selectedOption,
      score,
      showResult,
    } = this.state;
    const question = dummyQuestions[currentQuestion];
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    return (

      <>
        <div className='QUIZ'>
        <Navbar />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className='container1'>
          <div className='box2'> 
          <h5>Select from your active subscriptions</h5>
            <html>
              <head>
                <title>Book and Subscription Data</title>
              </head>
              <body>
                <div className='table1'>
                  <table width="800px" height="160px">
                    <thead>
                      <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Subscription ID</th>
                        <th>Subscription Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Harry Potter and the Deadly Hallows: Part 1</td>
                        <td>101</td>
                        <td>2023-01-15</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Harry Potter and the Deathly Hallows: Part 2</td>
                        <td>102</td>
                        <td>2023-02-20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Harry Potter and the Philosopher's Stone</td>
                        <td>103</td>
                        <td>2023-03-10</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Harry Potter and the Prisoner of Azkaban</td>
                        <td>104</td>
                        <td>2023-04-05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </body>
            </html>

          </div>





          <div className='box1'>
            <div className="quiz-container">
              {showResult ? (
                <div className="quiz-result">
                  <h2>Quiz Result</h2>
                  <p>Your score: {score} out of {dummyQuestions.length}</p>
                </div>

              ) : (

                <div className="quiz-question">
                  <h2>Quiz Question {currentQuestion + 1}</h2>
                  <p>{question.question}</p>
                  <form onSubmit={this.handleSubmit}>
                    {question.options.map((option, index) => (
                      <div key={index}>
                        <div className='quizInput'>
                          <label>
                            <input
                              type="radio"
                              value={option}
                              checked={selectedOption === option}
                              onChange={this.handleOptionChange}
                            />
                            {option}
                          </label>
                        </div>
                      </div>
                    ))}
                    <div className='quizSubmit'>
                      <button type="submit">Next</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>

      </>

    );

  }



}

export default Quiz;