import React, { ChangeEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

type LimitBlockProps = {
  minValue: number;
  maxValue: number;
  error: boolean;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  setError: (value: boolean) => void;
  onSetValueHandler: () => void;
  inputHandler: (value: number, name: string) => void;
};

export const LimitBlock = (props: LimitBlockProps) => {
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setError(false);
    const value = +e.currentTarget.value;
    const name = e.currentTarget.name;
    props.inputHandler(value, name);
  };

  return (
    <div className="limitWrapper">
      <div>
        <span className="inputTitle">max</span>
        <Input
          name="max"
          type="number"
          value={props.maxValue}
          onChange={handler}
          className={props.maxValue <= props.minValue || !props.error ? 'redInput' : 'input'}
        />
      </div>
      <div>
        <span className="inputTitle">min</span>
        <Input
          name="min"
          type="number"
          value={props.minValue}
          onChange={handler}
          className={props.maxValue <= props.minValue || !props.error ? 'redInput' : 'input'}
        />
      </div>
      <div>
        <Button
          name={'set'}
          disabled={props.error || props.maxValue <= props.minValue}
          onClick={props.onSetValueHandler}
        />
      </div>
    </div>
  );
};
