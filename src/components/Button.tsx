import React from 'react';

export type ButtonColor = 'red' | 'blue' | 'gray';

const BORDER_COLOR = {
  red: 'border-red-500',
  blue: 'border-blue-500',
  gray: 'border-gray-500',
};

export const Button: React.FC<{ color: ButtonColor }> = ({
  color,
  children,
}) => {
  return (
    <button
      className={`w-full border border-l-0 border-gray-500 hover:bg-gray-100`}
    >
      <div className={`px-4 py-1 border-l-8 ${BORDER_COLOR[color]}`}>
        {children}
      </div>
    </button>
  );
};
