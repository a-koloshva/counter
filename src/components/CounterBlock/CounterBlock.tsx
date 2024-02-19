import React from 'react';
import { Button } from '../Button/Button';

type CounterBlockProps = {
  count: number;
  setCount: (value: number) => void;
  error: boolean;
  minValue: number;
  maxValue: number;
};

export const CounterBlock = (props: CounterBlockProps) => {
  const onClickIncHandler = () => {
    localStorage.setItem('count', JSON.stringify(props.count));
    props.setCount(props.count + 1);
  };

  const onClickClearHandler = () => {
    props.setCount(props.minValue);
    localStorage.setItem('count', JSON.stringify(props.count));
  };

  return (
    <div className="counterWrapper">
      <div>
        {!props.error || props.maxValue === props.minValue ? (
          <span className="error">
            Warning! Check the parameters and press <b>"set"</b>
          </span>
        ) : (
          <span className={props.count === props.maxValue ? 'redCount' : 'count'}>
            {props.count}
          </span>
        )}
      </div>
      <div className="buttonBlock">
        <Button
          name={'inc'}
          disabled={!props.error || props.count === props.maxValue}
          onClick={onClickIncHandler}
        />
        <Button
          name={'clear'}
          disabled={!props.error || props.count === props.minValue}
          onClick={onClickClearHandler}
        />
      </div>
    </div>
  );
};
