import React, { useEffect, useContext } from "react"
import Navbar from "./navbar"
import Head from "./head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./footer";
import UnofficialAlert from "./unofficialAlert";
import AuthProvider, { AuthContext, AuthStatus } from "../AuthProvider";

import "../assets/sass/index.scss"

const Layout: React.FC<{
  pageMetadata: PageMetadata;
  isAuthRequired?: boolean;
}> = props => {
  useEffect(() => {
    /*
    document.querySelectorAll('.storage-link').forEach(async (el) => {
      const href = el.getAttribute('href') || '';
      if (href.substr(0, 3) !== '**') return;
      const url = await (new Firebase).getStorageDownloadUrl(href.substr(3));
      el.setAttribute('href', url);
    });
    */
  });

  return (
    <AuthProvider isAuthRequired={props.isAuthRequired || false}>
      <Head pageMetadata={props.pageMetadata} />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <UnofficialAlert />
        <main className="container main-content" style={{
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
