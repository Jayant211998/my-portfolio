import React from 'react';
import './projects.css';

const Projects = () => {
    

  return (
    <section id="projects">
        <span className='title'>My Projects</span>
        <div className='projectImages'>
            <a href="https://traveljournal-frontend.web.app/"><div className='projectImg' ><h2>Travel Journal</h2></div></a>
            <a href="https://food-order-app-433bf.web.app/"><div className='projectImg' ><h2>Food Order App</h2></div></a>   
            <a href="https://color-code-app.web.app/"><div className='projectImg' ><h2>Color Code App</h2></div></a>    
            <a href="https://tenzies-game-51037.web.app/"><div className='projectImg' ><h2>Tenzies Game</h2></div></a>
            <a href="https://github.com/Jayant211998/CarEvaluation"><div className='projectImg' ><h2>Car Evaluation</h2></div></a>
            <a href="https://github.com/Jayant211998/HandGestureRecognition"><div className='projectImg' ><h2>Gesture Recognition</h2></div></a>   
            <a href="https://github.com/Jayant211998/TicTacToe"><div className='projectImg' ><h2>Tic Tac Toe</h2></div></a>    
            <a href="https://github.com/Jayant211998/voice-assistant"><div className='projectImg' ><h2>Voice Assistant</h2></div></a>    
        </div>
    </section>
    )
}

export default Projects