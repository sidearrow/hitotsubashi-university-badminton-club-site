import React from 'react';

import footerLinkList from '../data/footer_link_list.json'
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer py-5">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          {footerLinkList.map((v, i) => (
            <div key={i}>
              <Link to={v.path} className="d-inline-block mr-3">{v.text}</Link>
            </div>
          ))}
        </div>
        <div className="column is-half">
          <div className="text-right">
            <div>
              <span className="icon">
                <i className="far fa-envelope"></i>
              </span>
              <span>hit.bad.team2017@gmail.com</span>
            </div>
            <hr className="spacer is-1" />
            <div>
              <a href="https://twitter.com/hit_u_bad" target="__blank">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="ml-2">Twitter</span>
              </a>
            </div>
            <div>
              <a href="https://github.com/sidearrow/hit-u-bad" target="__blank">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="spacer is-1" />
      <div className="has-text-centered">{`© ${new Date().getFullYear()} 一橋大学バドミントン部`}</div>
    </div>
  </footer>
);

export default Footer;
