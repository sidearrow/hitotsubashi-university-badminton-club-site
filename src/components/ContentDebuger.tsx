import React, { useEffect } from 'react';

export const ContentDebuger: React.FC<{
  content: any;
  setContent: React.Dispatch<any>;
}> = ({ children, content, setContent }) => {
  useEffect(() => {
    window.debugContent = () => console.log(content);
    window.debugSetContent = (v) => setContent(JSON.parse(v));
  });
  return <>{children}</>;
};
