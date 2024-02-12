import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

function App() {
  let [count, setCount] = useState(0);
  let [maxValue, setMaxValue] = useState(0);
  let [afterSetMaxValue, setAfterSetMaxValue] = useState<number>(0);
  let [minValue, setMinValue] = useState(0);
  let [afterSetMinValue, setAfterSetMinValue] = useState<number>(0);
  let [message, setMessage] = useState<boolean>(false);

  useEffect(() => {
    const countLocal = localStorage.getItem('count');
    const afterSetMinValueLocal = localStorage.getItem('afterSetMinValue');
    const afterSetMaxValueLocal = localStorage.getItem('afterSetMaxValue');
    setMessage(true);

    if (countLocal) {
      setCount(JSON.parse(countLocal));
    }
    if (afterSetMinValueLocal) {
      setAfterSetMinValue(JSON.parse(afterSetMinValueLocal));
      setMinValue(JSON.parse(afterSetMinValueLocal));
    }
    if (afterSetMaxValueLocal) {
      setAfterSetMaxValue(JSON.parse(afterSetMaxValueLocal));
      setMaxValue(JSON.parse(afterSetMaxValueLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('afterSetMinValue', JSON.stringify(afterSetMinValue));
    localStorage.setItem('afterSetMaxValue', JSON.stringify(afterSetMaxValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('minValue', JSON.stringify(minValue));
  }, [count, afterSetMinValue, afterSetMaxValue, minValue, maxValue]);

  const onClickIncHandler = () => setCount(count + 1);
  const onClickClearHandler = () => setCount(afterSetMinValue); // Очищаем счетчик до заданного минимального значения

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // Максимальное узначение установленное в input
    setMaxValue(Number(e.currentTarget.value));
    setMessage(false);
  };

  const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // Минимальное значение установленное в input
    setMinValue(Number(e.currentTarget.value));
    setMessage(false);
  };

  const onClickMinMaxInputHandler = () => {
    // При нажатии кнопки set
    setAfterSetMaxValue(maxValue);
    setAfterSetMinValue(minValue);
    setCount(minValue);
    setMessage(true);
  };

  const limitsCondition = maxValue <= minValue;

  return (
    <div className="App">
      <div className="limitWrapper">
        <div>
          <span className="inputTitle">max</span>
          <Input
            type="number"
            value={maxValue}
            onChange={onChangeMaxValueHandler}
            className={limitsCondition ? 'redInput' : 'input'}
          />
        </div>
        <div>
          <span className="inputTitle">min</span>
          <Input
            type="number"
            value={minValue}
            onChange={onChangeMinValueHandler}
            className={limitsCondition ? 'redInput' : 'input'}
          />
        </div>
        <div>
          <Button name={'set'} disabled={limitsCondition} onClick={onClickMinMaxInputHandler} />
        </div>
      </div>
      <div className="counterWrapper">
        <div>
          {message ? (
            <span className={count === afterSetMaxValue ? 'redCount' : 'count'}>{count}</span>
          ) : (
            <span className="message">
              Please, check limits and press <b>"set"</b>
            </span>
          )}
        </div>
        <div className="buttonBlock">
          <Button
            name={'inc'}
            disabled={!message || count === afterSetMaxValue}
            onClick={onClickIncHandler}
          />
          <Button
            name={'clear'}
            disabled={!message || count === afterSetMinValue}
            onClick={onClickClearHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
