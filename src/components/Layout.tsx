import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Breadcrumb, BreadcrumbItems } from './Breadcrumb';
import { Container } from './Container';
import { config } from '../config';
import { useRouter } from 'next/router';

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

  return (
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ac2926" />
        <meta name="theme-color" content="#ac2926" />
        <meta
          name="google-site-verification"
          content={config.googleSiteVerification}
        />
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
  );
};
