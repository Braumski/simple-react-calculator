import { useState, useRef } from 'react'
import './index.css'

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null);
  const [result, setResult] = useState(0); 

  const handleKeyDown = (e) => {
    const key = e.key || String.fromCharCode(e.keyCode)
    console.log(`Key pressed: ${key}`);
    switch (key) {
      case "=":
        resetResult();
        break;
    }
  }
 
  const helperFunc = (paramFunc) => (e) =>{
    /* Refactored parent function that will prevent the default button action */
    e.preventDefault();
    paramFunc();
    inputRef.current.focus();
    inputRef.current.select();
  }

  function plus() {
    setResult((result) => result + Number(inputRef.current.value))
  }
 
  function minus() { 
    setResult((result) => result - Number(inputRef.current.value))
  }
 
  function times() { 
    setResult(result => result * Number(inputRef.current.value))
  } 
 
  function divide() { 
    setResult(result => result / Number(inputRef.current.value))
  }
 
  function resetResult() { 
    setResult(0)
    inputRef.current.value = '';
  } 


 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form onKeyDown={handleKeyDown}> 
        <p 
        ref={resultRef}
        > 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <p>Use = to clear</p>
        <button onClick={helperFunc(plus)}>add</button> 
        <button onClick={helperFunc(minus)}>subtract</button> 
        <button onClick={helperFunc(times)}>multiply</button> 
        <button onClick={helperFunc(divide)}>divide</button> 
        <button onClick={helperFunc(resetResult)}>clear</button> 
      </form>
      
    </div> 
  ); 
} 
 
export default App; 
