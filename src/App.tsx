import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Simon from './components/Simon';
import { setSimonSizeLocalStorage, getSimonSizeLocalStorage } from './lib/LocalStorage';
import { setSimonSpeedLocalStorage, getSimonSpeedLocalStorage } from './lib/LocalStorage';

function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [size, setSize] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleSizeChange = (e: any) => setSize(e.target.valueAsNumber);
  const handleSpeedChange = (e: any) => setSpeed(e.target.valueAsNumber);
  const handleGameStart = () => setGameRunning(true);
  const handleGameEnd = () => setGameRunning(false);

  useEffect(() => {
    if(!getSimonSizeLocalStorage()) { setSize(14); setSimonSizeLocalStorage('14'); }
    else { setSize(Number(getSimonSizeLocalStorage())); }
  }, []);

  return (
    <div className='App'>
      <div className='container mx-auto max-w-screen-lg m-5'>
        <Header gameRunning={gameRunning} />
        
        <Simon size={size} gameRunning={gameRunning} handleGameStart={handleGameStart} handleGameEnd={handleGameEnd} />

        <div className='flex justify-center gap-5'>
          <div className='flex flex-col items-center transition'>
            <label htmlFor='size' className='mb-1'>Simon Size</label>
            <input id='size' type='range' min={3} max={30} defaultValue={14} name='size' onChange={(e) => handleSizeChange(e)} disabled={!gameRunning ? true : false} className='h-2 w-32 bg-gray-200 rounded-lg appearance-none cursor-pointer' />
          </div>

          <div className='flex flex-col items-center transition'>
            <label htmlFor='speed' className='mb-1'>Game Speed</label>
            <input id='speed' type='range' min={1} max={30} defaultValue={15} name='speed' onChange={(e) => handleSpeedChange(e)} disabled={gameRunning ? true : false} className='h-2 w-32 bg-gray-200 rounded-lg appearance-none cursor-pointer' />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
