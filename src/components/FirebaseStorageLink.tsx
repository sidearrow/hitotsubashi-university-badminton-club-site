import React, { useRef, useState } from 'react';
import FirebaseService from '../FirebaseService';

type Props = {
  storagePath: string;
};

export const FirebaseStorageLink: React.FC<Props> = ({
  children,
  storagePath,
}) => {
  const firebaseService = new FirebaseService();
  const [url, setUrl] = useState<string>('#');
  const dummyLinkRef = useRef<HTMLAnchorElement>(null);

  const clickHandler = () => {
    (async () => {
      if (url === '#') {
        const __url = await firebaseService.getStorageDownloadUrl(storagePath);
        setUrl(__url === null ? '/404' : __url);
      }
      if (dummyLinkRef.current !== null) {
        dummyLinkRef.current.click();
      }
    })();
  };

  return (
    <>
      <span onClick={clickHandler}>{children}</span>
      <a ref={dummyLinkRef} href={url} target="_blank" rel="noreferrer"></a>
    </>
  );
};
