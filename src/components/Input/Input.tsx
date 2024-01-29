import React, { ChangeEvent } from 'react';

type InputProps = {
  type: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export const Input = ({ type, value, onChange, className }: InputProps) => {
  return <input type={type} value={value} onChange={onChange} className={className} />;
};
