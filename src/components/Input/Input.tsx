import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = DefaultProps & {
  type: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = (props: InputProps) => {
  return <input {...props} min={0} />;
};
