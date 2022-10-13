import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0)

  const handleTransform = pixel => () => {
    setState(pixel)
  }

  return (
    <>
    <div className="container">
      <div className='slide-container' style={{ transform: `translateX(${state}px)` }}>
        <div className='slide'>Slide 1</div>
        <div className='slide'>Slide 2</div>
        <div className='slide'>Slide 3</div>
        <div className='slide'>Slide 4</div>
      </div>
    </div>
    <div className='sidebar'>
        <button onClick={handleTransform(0)}>1</button>
        <button onClick={handleTransform(-500)}>2</button>
        <button onClick={handleTransform(-1000)}>3</button>
        <button onClick={handleTransform(-1500)}>4</button>
    </div>
    </>
  );
}

export default App;
