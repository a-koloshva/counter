import React, { useState } from 'react';
import './App.css';
import { LimitBlock } from './components/LimitBlock/LimitBlock';
import { CounterBlock } from './components/CounterBlock/CounterBlock';

function App() {
    let [error, setError] = useState<boolean>(false);

    return (
        <div className="App">
            <LimitBlock error={error} setError={setError} />
            <CounterBlock error={error} setError={setError} />
        </div>
    );
}

export default App;

// разбить на компоненты
// перенести localstorage внутрь функций
// переименовать onClickMinMaxInputHandler на onSetValueHandler, как-то так
// вывести отдельно стейт для ошибки с начальным значением "", если есть ошибка выводить текст, если ошибки нет, выводить число
// посмотреть видос по github pages и залить на гитхаб коунтер
