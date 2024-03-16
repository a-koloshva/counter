import React from 'react';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/store';
import { CounterType, clearCounterAC, incrementCounterAC } from '../../store/counterReducer';

type CounterBlockProps = {
    error: boolean;
    setError: (error: boolean) => void;
};

export const CounterBlock = (props: CounterBlockProps) => {
    const counter = useSelector<AppRootStateType, CounterType>((state) => state.counter);
    const dispatch = useDispatch();

    const onClickIncHandler = () => {
        dispatch(incrementCounterAC());
    };

    const onClickClearHandler = () => {
        dispatch(clearCounterAC());
    };

    return (
        <div className="counterWrapper">
            <div>
                {!props.error || counter.maxValue === counter.minValue ? (
                    <span className="error">
                        Warning! Check the parameters and press <b>"set"</b>
                    </span>
                ) : (
                    <span className={counter.count === counter.maxValue ? 'redCount' : 'count'}>
                        {counter.count}
                    </span>
                )}
            </div>
            <div className="buttonBlock">
                <Button
                    name={'inc'}
                    disabled={counter.count === counter.maxValue}
                    onClick={onClickIncHandler}
                />
                <Button
                    name={'clear'}
                    disabled={counter.count === counter.minValue}
                    onClick={onClickClearHandler}
                />
            </div>
        </div>
    );
};
