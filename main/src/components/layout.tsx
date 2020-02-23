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
        <main className="section">
          <div className="container main-content" style={{ flex: 1 }}>{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout
