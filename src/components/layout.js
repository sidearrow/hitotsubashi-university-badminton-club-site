import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "./sass/index.scss"

const Layout = ({ children }) => {
  return (
    <div className="bg-light h-100">
      <Navbar />
      <main
        className="container bg-white"
        style={{
          maxWidth: 720,
          marginTop: -57.5,
          marginBottom: 40,
          paddingTop: 90,
          paddingBottom: 45,
          minHeight: 'calc(100% - 80px)',
        }}
      >{children}</main>
      <footer className="text-center">
        © {new Date().getFullYear()} 一橋大学バドミントン部
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
