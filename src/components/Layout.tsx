import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type Props = {
  title: string;
  description: string;
};

export const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Head>
          <title>
            {title === '' ? title : title + ' | '}一橋大学バドミントン部
          </title>
          <meta name="description" content={description} />
        </Head>
        <header>
          <Navbar />
        </header>
        <main
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            paddingTop: '60px',
            paddingBottom: '40px',
          }}
        >
          <div className="mx-auto max-w-screen-sm px-4">{children}</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
