import React from 'react';

type ButtonProps = {
  name: string;
  className: string;
  disabled: boolean;
  onClick: () => void;
};

export const Button = ({ name, className, disabled, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
