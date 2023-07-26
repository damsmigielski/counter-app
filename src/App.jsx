import { useState } from "react";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  const handleIncrement = () => {
    setCount(count + incrementValue);
  };

  const handleDecrement = () => {
    setCount(count - incrementValue);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleInputChange = (event) => {
    setIncrementValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="style">
        <h1>Damian Śmigielski HOMEWORK counter app</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <label>
          Increment Value:
          <input
            type="number"
            value={incrementValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
}

export default CounterApp;
