import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Head from './Head';
import Footer from './Footer';
import '../assets/sass/index.scss';
import { setEventStorageLink } from '../domUtils';

const Layout: React.FC<{
  title: string;
  description: string;
  isFullWidth?: boolean;
}> = props => {
  useEffect(() => {
    setEventStorageLink();
  }, []);

  return (
    <>
      <Head title={props.title} description={props.description} />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <main
          className={props.isFullWidth !== true ? 'container py-5' : ''}
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            width: '100%',
            paddingTop: 0,
          }}
        >
          <div>{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
