import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Head from "./Head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./Footer";
import AuthProvider from "../AuthProvider";

import "../assets/sass/index.scss"
import Firebase from "../firebase";

const Layout: React.FC<{
  pageMetadata?: PageMetadata;
  isAuthRequired?: boolean;
}> = props => {
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
    <AuthProvider isAuthRequired={props.isAuthRequired || false}>
      <Head />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <main className="container main-content py-5" style={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          width: '100%',
          paddingTop: 0,
        }}>{props.children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout
