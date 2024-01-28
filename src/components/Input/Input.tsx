import React, { ChangeEvent } from 'react';

type InputProps = {
  type: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, value, onChange }: InputProps) => {
  return <input type={type} value={value} onChange={onChange} />;
};
