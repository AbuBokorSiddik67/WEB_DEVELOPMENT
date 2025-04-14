import { useState } from 'react'
import './App.css'
import Iemty from './components/Iemty'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInput] = useState('');

  localStorage.setItem('count', count)
  return (
    <>
       <Iemty></Iemty>
      <div>
          <h1 className='text-xl text-emerald-700 font-bold mb-5'>
          Your Team Run: {localStorage.getItem('count')}
          </h1>
          <input
						id='input1'
						className='w-[100px] mr-5 border-2 p-2 rounded-xl'
						type="text"
            placeholder='Type Your Run and Enter Count'
          value={inputValue}
          onChange={(val)=>setInput(val.target.value)}
					/>
         <div className="card">
            <button
            className='mr-5'
            onClick={() => {
              let inputVal = parseInt(inputValue);
              const add = count + inputVal;
              setCount(add);
              setInput('');
            }}
          >
						Count
            </button>
              <button onClick={()=>{setCount(0)}}>
              Reset
            </button>
          </div>
      </div>
      <Iemty></Iemty>
    </>
  )
}

export default App
