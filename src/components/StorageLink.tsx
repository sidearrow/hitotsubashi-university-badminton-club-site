import React from 'react';
import Firebase from '../FirebaseService';

const StorageLink: React.FC<{ path: string }> = ({ path, children }) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.persist();
    if (e.target.href !== '') {
      return;
    }

    let url;
    try {
      url = await new Firebase().getStorageDownloadUrl(path);
    } catch {
      url = '/404';
    }
    e.target.setAttribute('href', url);
    e.target.click();
  };

  return (
    <a
      target="__blank"
      onClick={async e => await handleClick(e)}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </a>
  );
};
export default StorageLink;
