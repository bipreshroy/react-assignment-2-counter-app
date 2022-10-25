import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };
  const handleResetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {counter}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={handleIncrementCounter}
            disabled={counter >= 5}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={handleDecrementCounter}
            disabled={counter <= -5}>
            -
          </button>
          <button className="btn card__btn" onClick={handleResetCounter}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
