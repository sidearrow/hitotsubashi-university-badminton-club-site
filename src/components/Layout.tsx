import React, { useEffect } from 'react';
import Head from './Head';
import '../assets/sass/index.scss';
import { setEventStorageLink } from '../domUtils';
import { CmpNavbar } from './navbar/navbar.cmp';
import { CmpFooter } from './footer/footer.cmp';

const Layout: React.FC<{
  title: string;
  description: string;
  isFullWidth?: boolean;
}> = ({ title, description, isFullWidth, children }) => {
  useEffect(() => {
    setEventStorageLink();
  }, []);

  const styleMainContainer: React.CSSProperties = {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  };

  if (!isFullWidth) {
    styleMainContainer.maxWidth = '720px';
    styleMainContainer.padding = '3rem 0';
  }

  return (
    <>
      <Head title={title} description={description} />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CmpNavbar />
        <main
          className={`container ${isFullWidth ? '' : 'is-fluid'}`}
          style={styleMainContainer}
        >
          <div>{children}</div>
        </main>
        <CmpFooter />
      </div>
    </>
  );
};

export default Layout;
