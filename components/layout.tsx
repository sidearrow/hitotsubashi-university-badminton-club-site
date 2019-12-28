import React from 'react';
import Head from 'next/head';
import Nav from './nav';
import '../assets/index.scss';

const Layout: React.FC = (props) => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="container" style={{
      maxWidth: 720
    }}>{props.children}</div>
  </>
);

export default Layout;
