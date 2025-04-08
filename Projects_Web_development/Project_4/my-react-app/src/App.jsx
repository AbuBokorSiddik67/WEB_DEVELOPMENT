
import './App.css'
import { useState } from "react"

function App() {

  const [times, setTimes] = useState(0);
  const sixes = () => {
    const newTimes = times + 1;
    setTimes(newTimes);
  };
  return (
    <div className='card'> 
      <h2>Count: {times}</h2>

      <div className='gapCard'>
      <button onClick={sixes}>Count</button>
      <button onClick={sixes}>Remove</button>
      <button onClick={sixes}>Reset</button>
      </div>
      
    </div>
  )
};

export default App;


