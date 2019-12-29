import * as React from "react"

import Navbar from "./navbar"
import "../assets/sass/index.scss"

const Layout: React.FC = props => (
  <div className="bg-light" style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Navbar />
    <main style={{ flex: 1 }}><div className="container">{props.children}</div></main>
    <footer className="footer">
      <div className="container has-text-centered">
        © {new Date().getFullYear()} 一橋大学バドミントン部
      </div>
    </footer>
  </div>
)

export default Layout
