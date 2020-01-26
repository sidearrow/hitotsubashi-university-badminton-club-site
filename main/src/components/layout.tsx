import * as React from "react"

import Navbar from "./header"
import "../assets/sass/index.scss"
import Head from "./head";
import { PageMetadata } from "../pageMetaData";
import Footer from "./footer";

const Layout: React.FC<{
  pageMetadata: PageMetadata
}> = props => {
  return (
    <>
      <Head pageMetadata={props.pageMetadata} />
      <div className="bg-light" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <main className="container bg-white main-container" style={{ flex: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout
