import React, { ChangeEvent, useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/store';
import {
    CounterType,
    clearCounterAC,
    setMaxValueCounterAC,
    setMinValueCounterAC,
} from '../../store/counterReducer';

type LimitBlockProps = {
    error: boolean;
    setError: (error: boolean) => void;
};

export const LimitBlock = (props: LimitBlockProps) => {
    const counter = useSelector<AppRootStateType, CounterType>((state) => state.counter);
    const dispatch = useDispatch();

    const [newMaxValue, setNewMaxValue] = useState(counter.maxValue);
    const [newMinValue, setNewMinValue] = useState(counter.minValue);

    const handleSetValue = () => {
        if (newMaxValue >= newMinValue) {
            dispatch(setMaxValueCounterAC(newMaxValue));
            dispatch(setMinValueCounterAC(newMinValue));
            dispatch(clearCounterAC());
            props.setError(!props.error);
        }
    };

    const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(+e.target.value);
        props.setError(false);
    };

    const handleMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMinValue(+e.target.value);
        props.setError(false);
    };

    return (
        <div className="limitWrapper">
            <div>
                <span className="inputTitle">max</span>
                <Input
                    name="max"
                    type="number"
                    value={newMaxValue}
                    onChange={handleMaxValueChange}
                    className={newMaxValue <= newMinValue || !props.error ? 'redInput' : 'input'}
                />
            </div>
            <div>
                <span className="inputTitle">min</span>
                <Input
                    name="min"
                    type="number"
                    value={newMinValue}
                    onChange={handleMinValueChange}
                    className={newMaxValue <= newMinValue || !props.error ? 'redInput' : 'input'}
                />
            </div>
            <div>
                <Button
                    name={'set'}
                    disabled={props.error || newMaxValue <= newMinValue}
                    onClick={handleSetValue}
                />
            </div>
        </div>
    );
};
