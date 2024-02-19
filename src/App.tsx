import React, { useEffect, useState } from 'react';
import './App.css';
import { LimitBlock } from './components/LimitBlock/LimitBlock';
import { CounterBlock } from './components/CounterBlock/CounterBlock';

export const getInitialValue = (key: string) => {
  const countLocal = localStorage.getItem(key);
  if (countLocal) {
    return JSON.parse(countLocal);
  } else {
    return 0;
  }
};

function App() {
  let [count, setCount] = useState(getInitialValue('count'));
  let [maxValue, setMaxValue] = useState(getInitialValue('maxValue'));
  let [minValue, setMinValue] = useState(getInitialValue('minValue'));

  let [error, setError] = useState<boolean>(false);

  console.log('values', maxValue, minValue, count);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    setError(true);
  }, [count]);

  const onSetValueHandler = () => {
    setCount(minValue);
    setError(true);

    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('minValue', JSON.stringify(minValue));
  };

  // const validate = (value: number, name: string): boolean => {
  //   if (name === 'max') {
  //     if (value < 0 || value === minValue) {
  //       setError(true);
  //       return false;
  //     }
  //     return true;
  //   } else return true;
  // };

  const inputHandler = (value: number, name: string) => {
    if (name === 'max') {
      setMaxValue(value);
      // if (validate(value, name)) {
      // }
    } else {
      setMinValue(value);
    }
  };

  return (
    <div className="App">
      <LimitBlock
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        error={error}
        setError={setError}
        onSetValueHandler={onSetValueHandler}
        inputHandler={inputHandler}
      />
      <CounterBlock
        count={count}
        setCount={setCount}
        error={error}
        minValue={minValue}
        maxValue={maxValue}
      />
    </div>
  );
}

export default App;

// разбить на компоненты
// перенести localstorage внутрь функций
// переименовать onClickMinMaxInputHandler на onSetValueHandler, как-то так
// вывести отдельно стейт для ошибки с начальным значением "", если есть ошибка выводить текст, если ошибки нет, выводить число
// посмотреть видос по github pages и залить на гитхаб коунтер
