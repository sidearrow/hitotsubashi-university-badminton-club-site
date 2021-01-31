import React from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Menu } from './Menu';
import { PageHeader } from './PageHeader';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description: string;
};

export const Layout: React.FC<Props> = ({ children, title, description }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMenuShow, setIsMenuShow] = React.useState(false);
  const toggleMenuShow = () => {
    setIsMenuShow(!isMenuShow);
  };

  const isShowPageHeader = pathname !== '/';

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
        <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
          <Navbar toggleMenuShow={toggleMenuShow} />
        </header>
        <main className="flex-grow flex-shrink relative max-w-screen-lg mx-auto w-full">
          <div className="md:flex md:flex-row">
            <div
              className={
                'absolute md:static w-full md:w-auto h-full bg-white' +
                (isMenuShow ? '' : ' hidden md:block')
              }
            >
              <Menu />
            </div>
            <div className="flex-grow flex-shrink">
              {isShowPageHeader && (
                <PageHeader description={description}>{title}</PageHeader>
              )}
              <div className="p-4">{children}</div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
