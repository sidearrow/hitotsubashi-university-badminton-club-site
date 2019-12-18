import { Link } from "gatsby"
import React from "react"

const menuArray = [
  {
    text: "部活情報",
    path: "/about",
  },
  {
    text: "部員情報",
    path: "/member",
  },
  {
    text: "大会結果",
    path: "/result",
  },
  {
    text: "三多摩大会",
    path: "/santama",
  },
  {
    text: "掲示板",
    path: "/bbs",
  },
  {
    text: "みずとり会",
    path: "/mizutori",
  },
]

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMenuShow: false }
  }

  toggleMenu = () => {
    this.setState(state => ({
      isMenuShow: !state.isMenuShow,
    }))
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-white navbar-expand-md shadow">
        <Link className="navbar-brand" to="/">
          一橋大学 バドミントン部
        </Link>
        <button
          type="button"
          className="border-0 navbar-toggler"
          onClick={this.toggleMenu}
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          className={`ml-md-3 navbar-collapse collapse ${
            this.state.isMenuShow ? "show" : ""
          }`}
        >
          <ul class="navbar-nav mr-auto">
            {menuArray.map((v, i) => {
              return (
                <li class="navbar-item">
                  <Link className="nav-link" to={v.path} key={i}>
                    {v.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ul class="mt-md-0 mt-2 navbar-nav">
            <li>
              <a
                target="_blank"
                href="https://twitter.com/hit_u_bad"
                class="nav-link"
              >
                <i class="icon-twitter font-size--1_5" />
                <span class="ml-2 font-size--1_1 align-top">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
