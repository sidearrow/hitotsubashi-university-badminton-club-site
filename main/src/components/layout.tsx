import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"
import PageHeader from "./pageHeader";
import Head from "./head";
import { PageMetadata } from "../pageMetaData";

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
        {props.pageMetadata.title !== 'HOME'
          && (<PageHeader pageMetadata={props.pageMetadata} />)}
        <main className="container bg-white main-container" style={{ flex: 1 }}>{props.children}</main>
        <footer className="footer py-5">
          <div className="container">
            <div className="text-right">
              <span>
                <a href="https://twitter.com/hit_u_bad" target="__blank">
                  <i className="fab fa-twitter"></i>
                  <span className="ml-2">Twitter</span>
                </a>
              </span>
              <span className="ml-4">
                <a href="https://github.com/sidearrow/hit-u-bad" target="__blank">
                  <i className="fab fa-github"></i>
                  <span className="ml-2">GitHub</span>
                </a>
              </span>
            </div>
            <div className="text-center text-secondary mt-4 pt-4 border-top">{`© ${new Date().getFullYear()} 一橋大学バドミントン部`}</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout
