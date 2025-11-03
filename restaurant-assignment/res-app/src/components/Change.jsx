import React, { useState } from 'react';

function Change() {
  const [count, setCount] = useState(0);
  const [plus, setPlus] = useState(false);
  const [minus, setMinus] = useState(false);

  function change() {
    setCount(count + 1);
    setPlus(true);
    setTimeout(() => setPlus(false), 300);
  }

  function changed() {
    setCount(count - 1);
    setMinus(true);
    setTimeout(() => setMinus(false), 300);
  }

  return (
    <div>
      <button
        onClick={changed}
        style={{
          backgroundColor: minus ? 'red' : '',
          color: minus ? 'white' : '',
          transition: '0.3s',
        }}
      >
        -
      </button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button
        onClick={change}
        style={{
          backgroundColor: plus ? 'green' : '',
          color: plus ? 'white' : '',
          transition: '0.3s',
        }}
      >
        +
      </button>
    </div>
  );
}

export default Change;
