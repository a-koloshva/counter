import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const onClickIncHandler = () => setCount(count + 1);
  const onClickClearHandler = () => setCount(0);

  return (
    <div className="App">
      <span className={count === 5 ? 'RedCount' : 'Count'}>{count}</span>
      <div className="ButtonBlock">
        <button className="Button" onClick={onClickIncHandler} disabled={count === 5}>
          inc
        </button>
        <button className="Button" onClick={onClickClearHandler} disabled={count === 0}>
          clear
        </button>
      </div>
    </div>
  );
}

export default App;
