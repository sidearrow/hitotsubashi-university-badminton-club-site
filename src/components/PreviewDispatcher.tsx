import { useRouter } from 'next/router';
import React, { createContext } from 'react';

export const PreviewDispatcherContext = createContext({ isPreview: false });

export const PreviewDispatcher: React.FC = ({ children }) => {
  const r = useRouter();
  const isPreview = r.query.preview === 'true';
  if (isPreview) {
    console.log('プレビュー環境を表示しています');
  }

  return (
    <PreviewDispatcherContext.Provider value={{ isPreview: isPreview }}>
      {children}
    </PreviewDispatcherContext.Provider>
  );
};
