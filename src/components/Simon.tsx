import React, { useState, useEffect } from 'react';

type SimonProps = {
  size: number,
  gameRunning: boolean,
  handleStartClick: () => void
}

const Simon = ({size, gameRunning, handleStartClick}: SimonProps) => {
  const [playerTurn, setPlayerTurn] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState<string[]>([]);

  const randomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randInt = getRandomInt(0, colors.length - 1);
    return colors[randInt];
  }

  const displayColor = async (delay: number) => {
    const color = randomColor();
    const colorElement = document.getElementById(color);

    setMoves([...moves, color]);

    setTimeout(() => {
      colorElement?.classList.remove(`bg-${color}-500`);
      colorElement?.classList.add(`bg-${color}-400`);
    }, delay);

    setTimeout(() => {
      colorElement?.classList.remove(`bg-${color}-400`);
      colorElement?.classList.add(`bg-${color}-500`);
    }, delay * 2);
  }

  useEffect(() => {
    if(gameRunning) {
      displayColor(1000);
    } 
  }, [gameRunning]);

  return (
    <div id='main' className={`${!gameRunning ? 'relative' : ''} py-10`}>
      <div id='game' className={`flex flex-col justify-center items-center transition ${gameRunning ? 'opacity-100' : 'opacity-0'}`}>
        <div id='top' className='flex'>
          <div id='yellow'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-yellow-500 rounded-tl-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-yellow-400' : 'hover:cursor-default'} transition`}>
          </div>
          <div id='blue'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-blue-500 rounded-tr-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-blue-400' : 'hover:cursor-default'} transition`}>
          </div>
        </div>
        <div id='bottom' className='flex'>
          <div id='red'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-red-500 rounded-bl-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-red-400' : 'hover:cursor-default'} transition`}>
          </div>
          <div id='green'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-green-500 rounded-br-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-green-400' : 'hover:cursor-default'} transition`}>
          </div>
        </div>
      </div>

      {!gameRunning ? ( 
        <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl py-2 px-16 rounded-md transition'
          onClick={handleStartClick}>
          Start
        </button>    
      ) : (
        <div className={`absolute font-semibold text-5xl top-10 left-1/2 transform -translate-x-1/2 transition delay-1000 ${gameRunning ? 'opacity-100' : 'opacity-0'}`}>
          Score: {score}
        </div>
      )}
      
    </div>
  )
}

function getRandomInt(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Simon;