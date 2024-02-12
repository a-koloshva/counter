import React from 'react';

type ButtonProps = {
  name: string;
  disabled: boolean;
  onClick: () => void;
};

export const Button = ({ name, disabled, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
