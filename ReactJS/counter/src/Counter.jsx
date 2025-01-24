import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-5">
      <h2>Counter: {count}</h2>
      <div className="mt-3">
        <button className="btn btn-success mx-2" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
