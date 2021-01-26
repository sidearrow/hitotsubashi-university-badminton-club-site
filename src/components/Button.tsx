import React from 'react';

export type ButtonColor = 'red' | 'blue' | 'gray';

const DEFAULT_COLOR = {
  red: 'bg-red-600',
  blue: 'bg-blue-600',
  gray: 'bg-gray-600',
};

const HOVER_COLOR = {
  red: 'hover:bg-red-700',
  blue: 'hover:bg-blue-700',
  gray: 'hover:bg-gray-700',
};

export const Button: React.FC<{ color: ButtonColor }> = ({
  color,
  children,
}) => {
  return (
    <button
      className={`w-full px-4 py-1 text-white ${HOVER_COLOR[color]} ${DEFAULT_COLOR[color]}`}
    >
      {children}
    </button>
  );
};
