import React from 'react';

export const Container: React.FC<{ isFullWidth?: boolean }> = ({
  children,
  isFullWidth,
}) => {
  return (
    <div className={`mx-auto max-w-screen-sm ${isFullWidth ? '' : 'px-4'}`}>
      {children}
    </div>
  );
};
