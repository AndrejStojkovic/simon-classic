import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Simon from './components/Simon';

function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [size, setSize] = useState(0);

  const handleSizeChange = (e: any) => setSize(e.target.valueAsNumber);
  const handleGameStart = () => setGameRunning(true);
  const handleGameEnd = () => setGameRunning(false);

  useEffect(() => {
    // check from localStorage and update size

    // if null
    let sizeInput = (document.getElementById('size') as HTMLInputElement).valueAsNumber;
    setSize(sizeInput);
  }, [])

  return (
    <div className='App'>
      <div className='container mx-auto max-w-screen-lg m-5'>
        <Header gameRunning={gameRunning} />
        
        <Simon size={size} gameRunning={gameRunning} handleGameStart={handleGameStart} handleGameEnd={handleGameEnd} />

        <div className={`flex flex-col items-center transition ${gameRunning ? 'opacity-100' : 'opacity-0'}`}>
          <label htmlFor='size'>Simon Size</label>
          <input id='size' type='range' min={3} max={30} defaultValue={14} name='size' onChange={(e) => handleSizeChange(e)} className='h-2 w-32 bg-gray-200 rounded-lg appearance-none cursor-pointer' />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
