import React from 'react';

export type ButtonColor = 'red' | 'blue' | 'gray';

const BORDER_COLOR = {
  red: 'border-red-700',
  blue: 'border-blue-700',
  gray: 'border-gray-700',
};

const TEXT_COLOR = {
  red: 'text-red-700',
  blue: 'text-blue-700',
  gray: 'text-gray-700',
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
      className={`w-full rounded px-4 py-1 border ${BORDER_COLOR[color]} ${TEXT_COLOR[color]} ${HOVER_COLOR[color]} hover:text-white`}
    >
      {children}
    </button>
  );
};
