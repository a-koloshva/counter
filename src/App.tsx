import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

function App() {
  let [count, setCount] = useState<number>(0);
  let [maxValue, setMaxValue] = useState(0);
  let [settedMaxValue, setSettedMaxValue] = useState(0);
  let [minValue, setMinValue] = useState(0);
  let [settedMinValue, setSettedMinValue] = useState(0);

  const onClickIncHandler = () => setCount(count + 1);
  const onClickClearHandler = () => setCount(settedMinValue);

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
  };

  const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value));
  };

  const onClickMinMaxInputHandler = () => {
    setSettedMaxValue(maxValue);
    setSettedMinValue(minValue);
    setCount(minValue);
  };

  return (
    <div className="App">
      <div className="limitWrapper">
        <div>
          <span className="inputTitle">max</span>
          <Input
            type="number"
            value={maxValue}
            onChange={onChangeMaxValueHandler}
            className={'input'}
          />
        </div>
        <div>
          <span className="inputTitle">min</span>
          <Input
            type="number"
            value={minValue}
            onChange={onChangeMinValueHandler}
            className={'input'}
          />
        </div>
        <div>
          <Button
            name={'set'}
            disabled={!(maxValue >= 0 && minValue >= 0) || maxValue <= minValue}
            className={'Button'}
            onClick={onClickMinMaxInputHandler}
          />
        </div>
      </div>
      <div className="counterWrapper">
        {/* <div>
          {maxValue > 0 && minValue > 0 ? (
            <span className={count === settedMaxValue ? 'RedCount' : 'Count'}>{count}</span>
          ) : (
            <span>Please, press "set".</span>
          )}
        </div> */}

        {/* {settedMaxValue === maxValue && settedMinValue === minValue ? (
          <span className={count === settedMaxValue ? 'RedCount' : 'Count'}>{count}</span>
        ) : (
          <span>Please, press "set".</span>
        )} */}
        <div className="ButtonBlock">
          <Button
            name={'inc'}
            disabled={
              count === settedMaxValue || maxValue !== settedMaxValue || minValue !== settedMinValue
            }
            className={'Button'}
            onClick={onClickIncHandler}
          />
          <Button
            name={'clear'}
            disabled={count === settedMinValue}
            className={'Button'}
            onClick={onClickClearHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
