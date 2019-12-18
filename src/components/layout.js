import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "./sass/index.scss"

const Layout = ({ children }) => {
  return (
    <div className="bg-light">
      <Navbar />
      <main
        className="container bg-white"
        style={{
          maxWidth: 720,
        }}
      >{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
