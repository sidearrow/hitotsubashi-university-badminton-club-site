import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"
import PageTitle from "./pageHeader";
import Head from "./head";
import { PageMetadata } from "../config/configPageMetadata";

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
        {props.pageMetadata.title
          && (<PageTitle title={props.pageMetadata.title} description={props.pageMetadata.description} />)}
        <main className="container bg-white" style={{ flex: 1 }}>{props.children}</main>
        <footer className="footer py-5">
          <div className="container text-center text-secondary">
            © {new Date().getFullYear()} 一橋大学バドミントン部
      </div>
        </footer>
      </div>
    </>
  );
};

export default Layout
