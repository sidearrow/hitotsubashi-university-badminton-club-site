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
        <CmpNavbar />
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
          <div
            style={
              props.isFullWidth
                ? {}
                : { maxWidth: '720px', margin: '3rem auto' }
            }
          >
            {props.children}
          </div>
        </main>
        <CmpFooter />
      </div>
    </>
  );
};

export default Layout;
