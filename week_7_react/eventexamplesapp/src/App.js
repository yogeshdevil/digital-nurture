import React, { useState } from 'react';
import './App.css';

// CurrencyConvertor Component
function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const rupeesValue = parseFloat(rupees);
    if (!isNaN(rupeesValue)) {
      const converted = rupeesValue / 90; // Approx. conversion rate
      setEuro(converted.toFixed(2));
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div className="currency-box">
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    console.log("Hello! Have a great day!");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic Event Example
    alert('I was clicked');
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>Synthetic Event Button</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
