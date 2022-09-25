import React, { useState, useEffect } from 'react';

type SimonProps = {
  size: number,
  gameRunning: boolean,
  handleGameStart: () => void,
  handleGameEnd: () => void
}

const Simon = ({size, gameRunning, handleGameStart, handleGameEnd}: SimonProps) => {
  const [playerTurn, setPlayerTurn] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);

  const randomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randInt = getRandomInt(0, colors.length - 1);
    return colors[randInt];
  }

  const wait = async (ms: number) => {
    return new Promise(res => setTimeout(res, ms));
  }

  const displayColors = async (delay: number) => {
    setPlayerTurn(false);

    for(let i = 0; i < moves.length; i++) {
      const color = moves[i];
      const colorElement = document.getElementById(color);
  
      if(i === 0) await wait(delay);
      else await wait(delay / 2);
      colorElement?.classList.remove(`bg-${color}-500`);
      colorElement?.classList.add(`bg-${color}-400`);
  
      await wait(delay / 2);
      colorElement?.classList.remove(`bg-${color}-400`);
      colorElement?.classList.add(`bg-${color}-500`);
    }

    await wait(500);
    setPlayerTurn(true);
  }

  const buttonClick = (moveColor: string) => {
    if(moveColor === moves[currentMoveIndex] && currentMoveIndex < moves.length - 1) {
      setCurrentMoveIndex(currentMoveIndex + 1);
      return;
    }

    if(moveColor === moves[currentMoveIndex] && currentMoveIndex >= moves.length - 1) {
      setScore(score + 1);
      setCurrentMoveIndex(0);
      setMoves([...moves, randomColor()]);
      return;
    }
    
    gameOver();
  }

  const gameOver = () => {
    setCurrentMoveIndex(0);
    setMoves([]);
    setScore(0);
    handleGameEnd();
  }

  useEffect(() => {
    if(gameRunning) {
      setMoves([...moves, randomColor()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameRunning]);

  useEffect(() => {
    displayColors(1000);
    console.log(moves);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves]);

  return (
    <div id='main' className={`${!gameRunning ? 'relative' : ''} py-10`}>
      <div id='game' className={`flex flex-col justify-center items-center transition ${gameRunning ? 'opacity-100' : 'opacity-0'}`}>
        <div id='top' className='flex'>
          <div id='yellow'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-yellow-500 rounded-tl-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-yellow-400' : 'hover:cursor-default'} transition`}
            onClick={() => buttonClick('yellow')}>
          </div>
          <div id='blue'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-blue-500 rounded-tr-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-blue-400' : 'hover:cursor-default'} transition`}
            onClick={() => buttonClick('blue')}>
          </div>
        </div>
        <div id='bottom' className='flex'>
          <div id='red'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-red-500 rounded-bl-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-red-400' : 'hover:cursor-default'} transition`}
              onClick={() => buttonClick('red')}>
          </div>
          <div id='green'
            style={{'width': `${size}rem`, 'height': `${size}rem`, 'margin': `${size <= 8 ? '3px' : '4px'}`}}
            className={`bg-green-500 rounded-br-full ${gameRunning && playerTurn ? 'hover:cursor-pointer hover:bg-green-400' : 'hover:cursor-default'} transition`}
            onClick={() => buttonClick('green')}>
          </div>
        </div>
      </div>

      {!gameRunning ? ( 
        <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl py-2 px-16 rounded-md transition shadow-md'
          onClick={handleGameStart}>
          Play
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