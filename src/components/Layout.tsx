import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Head from "./Head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./Footer";
import AuthProvider from "../AuthProvider";

import "../assets/sass/index.scss"
import Firebase from "../firebase";

const Layout: React.FC<{
  title: string;
  description: string;
  isAuthRequired?: boolean;
}> = props => {
  const isAuthRequired = props.isAuthRequired || false;

  useEffect(() => {
    document.querySelectorAll('[data-storage]').forEach(el => {
      if (el.getAttribute('href') !== '#') {
        return;
      }
      const storagePath = el.getAttribute('data-storage');
      if (storagePath === null) {
        return;
      }

      el.addEventListener('click', async (e) => {
        if ((e.target as HTMLElement).getAttribute('href') !== '#') {
          return;
        }
        e.preventDefault();
        let url;
        try {
          url = await (new Firebase).getStorageDownloadUrl(storagePath);
        } catch {
          url = '/404';
        }
        el.setAttribute('href', url);
        (el as HTMLElement).click();
      });
    })
  });

  return (
    <AuthProvider isAuthRequired={isAuthRequired}>
      <Head
        title={props.title}
        description={props.description}
      />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <main className="container py-5 main-content" style={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          width: '100%',
          paddingTop: 0,
        }}>
          {isAuthRequired && (
            <div className="text-right">
              <button className="btn btn-outline-dark">みずとり会<br />ログアウト</button>
            </div>
          )}
          <div>{props.children}</div>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout
