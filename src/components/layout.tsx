import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"
import PageTitle from "./pageTitle";

type Props = {
  isShowPageTitle: boolean;
  pageTitle: string;
  pageSubTitle: string | null;
};

const Layout: React.FC<Props> = props => (
  <div className="bg-light" style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Navbar />
    {props.isShowPageTitle
      && (<PageTitle title={props.pageTitle} subtitle={props.pageSubTitle} />)}
    <main className="container bg-white" style={{ flex: 1 }}>{props.children}</main>
    <footer className="footer py-5">
      <div className="container text-center text-secondary">
        © {new Date().getFullYear()} 一橋大学バドミントン部
      </div>
    </footer>
  </div>
)

export default Layout
