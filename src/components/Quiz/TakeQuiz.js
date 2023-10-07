import React from 'react'

import Navbar from '../Navbar/Navbar';

import Sidebar from '../Sidebar/Sidebar';

import './TakeQuiz.css';

// import SmallCard from './SmallCard';

 

function TakeQuiz() {

  return (

    <div className='QUIZ'>

        <Navbar/>

        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="container1">
      <h1>Welcome to quiz section
      </h1>
      </div>

    </div>

 

  )

}

 

export default TakeQuiz