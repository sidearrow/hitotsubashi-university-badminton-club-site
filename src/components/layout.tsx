import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"

const Layout: React.FC = props => (
  <div className="bg-light h-100">
    <Navbar />
    <div
      className="container bg-white"
      style={{
        maxWidth: 720,
        marginTop: -57.5,
        marginBottom: 40,
        paddingTop: 90,
        paddingBottom: 45,
        minHeight: 'calc(100% - 80px)',
      }}
    > {props.children}</div>
    <footer className="text-center" >
      © {new Date().getFullYear()} 一橋大学バドミントン部
  </footer>
  </div>
)

export default Layout
