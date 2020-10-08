import React from 'react';

export const Anchor: React.FC<{ id: string }> = ({ children, id }) => (
  <div className="relative">
    <span id={id} className="absolute" style={{ top: '-80px' }}></span>
    {children}
  </div>
);
