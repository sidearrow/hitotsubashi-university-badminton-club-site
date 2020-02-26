import React, { useEffect, useContext } from "react"
import Navbar from "./Navbar"
import Head from "./Head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./Footer";
import UnofficialAlert from "./UnofficialAlert";
import AuthProvider from "../AuthProvider";

import "../assets/sass/index.scss"

const Layout: React.FC<{
  pageMetadata: PageMetadata;
  isAuthRequired?: boolean;
}> = props => {
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
