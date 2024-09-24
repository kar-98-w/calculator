import React, { useState } from 'react';
import './App.css';

function Key({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return <div>{value}</div>;
}

function App() {
  const [input, setInput] = useState('0');

  const clickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (input === '0' && !isNaN(value)) {
      setInput(value); // replace initial zero if a number is clicked
    } else if (value === 'C') {
      setInput('0'); // clear the input
    } else if (value === '=') {
      try {
        setInput(eval(input.replace('x', '*'))); // evaluate the expression
      } catch {
        setInput('Error'); // handle errors
      }
    } else {
      setInput((prev) => prev + value); // append clicked value to input
    }
  };

  return (
    <div className="App">
      <div className="Calc">
        <div className="Disp">
          <Display value={input} />
        </div>
        <div className="Button">
          <Key label={7} onClick={clickHandler} />
          <Key label={8} onClick={clickHandler} />
          <Key label={9} onClick={clickHandler} />
          <Key label={"/"} onClick={clickHandler} />

          <Key label={4} onClick={clickHandler} />
          <Key label={5} onClick={clickHandler} />
          <Key label={6} onClick={clickHandler} />
          <Key label={"-"} onClick={clickHandler} />

          <Key label={1} onClick={clickHandler} />
          <Key label={2} onClick={clickHandler} />
          <Key label={3} onClick={clickHandler} />
          <Key label={"x"} onClick={clickHandler} />

          <Key label={"C"} onClick={clickHandler} />
          <Key label={0} onClick={clickHandler} />
          <Key label={"="} onClick={clickHandler} />
          <Key label={"+"} onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
