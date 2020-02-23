import * as React from "react"

import Navbar from "./header"
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
      <div className="content">
        <Navbar />
        <UnofficialAlert />
        <main className="container main-content" style={{ flex: 1 }}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout
