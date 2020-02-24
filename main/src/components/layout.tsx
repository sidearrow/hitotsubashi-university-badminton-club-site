import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"
import Head from "./head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./footer";
import UnofficialAlert from "./unofficialAlert";

const Layout: React.FC<{
  pageMetadata: PageMetadata
}> = props => {
  return (
    <>
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
        }}>{props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout
