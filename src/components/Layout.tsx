import React from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Breadcrumb, BreadcrumbItems } from './Breadcrumb';
import { Container } from './Container';
import { config } from '../config';
import { useRouter } from 'next/router';
import { GTAG_SCRIPT } from '../lib/gtag';
import { AmpSidebar } from './AmpSidebar';

type Props = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItems;
};

export const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  breadcrumbs,
}) => {
  const router = useRouter();
  const canonicalUrl = config.baseUrl + router.asPath;

  const isAmp = useAmp();

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
            paddingTop: '100px',
          }}
        >
          {breadcrumbs && (
            <Container>
              <Breadcrumb items={breadcrumbs} />
            </Container>
          )}
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      {isAmp && <AmpSidebar />}
    </>
  );
};
