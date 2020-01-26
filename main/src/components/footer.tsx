import React from 'react';

import footerLinkList from '../data/footer_link_list.json'
import { Link } from 'gatsby';

const Footer = () => (
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
      <div className="mt-4">
        {footerLinkList.map((v) => (
          <Link to={v.path} className="mr-3">{v.text}</Link>
        ))}
      </div>
      <div className="text-center text-secondary mt-4 pt-4 border-top">{`© ${new Date().getFullYear()} 一橋大学バドミントン部`}</div>
    </div>
  </footer>
);

export default Footer;
