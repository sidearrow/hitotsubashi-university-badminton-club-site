import React, { useEffect, useContext } from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"
import Head from "./head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./footer";
import UnofficialAlert from "./unofficialAlert";
import Firebase from "../firebase";
import AuthProvider from "../AuthProvider";

const Layout: React.FC<{
  pageMetadata: PageMetadata
}> = props => {
  useEffect(() => {
    document.querySelectorAll('.storage-link').forEach(async (el) => {
      const href = el.getAttribute('href') || '';
      if (href.substr(0, 3) !== '**/') return;
      const url = await (new Firebase).getStorageDownloadUrl(href.substr(3));
      el.setAttribute('href', url);
    });
  });

  return (
    <AuthProvider>
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
