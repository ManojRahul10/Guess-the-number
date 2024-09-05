
import { useState } from 'react';
import './App.css';
import Result from './result';

const secretNumber = Math.floor(Math.random() * 10) + 1;

function App() {

  const [term,setTerm]=useState(''); 
  const handleChange=(e)=> {
    setTerm(e.target.value)
  }

  return (
    <div className="container">
      <div className='head'>
        <label htmlFor='term' > 
          Guess the Number Between 1-10 (answer: 🖕)
        </label>
      </div>
      <input id='term' type='text' name='number' onChange={handleChange} />
      <Result className="result" secretNumber={secretNumber} term ={term}/>
    </div>
  );
}

export default App;
