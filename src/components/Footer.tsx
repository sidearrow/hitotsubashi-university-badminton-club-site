import React from 'react';
import { Link } from 'gatsby';

import footerLinkList from '../data/footer_link_list.json';
import config from '../config';

import ImgSocialGithub from '../assets/img/social-github.svg';
import ImgSocialTwitter from '../assets/img/social-twitter.svg';
import ImgSocialInstagram from '../assets/img/social-instagram.svg';

const socailIconLinkList = [
  { imgSrc: ImgSocialTwitter, href: config.url.twitter },
  { imgSrc: ImgSocialInstagram, href: config.url.instagram },
  { imgSrc: ImgSocialGithub, href: config.url.github },
];

const FooterIconItem: React.FC<{
  icon: string;
  text: string;
  path?: string;
  isTargetBlank?: boolean;
}> = props => (
  <div className="mb-2">
    <span className={`icon mr-2 ${props.path ? 'text-main' : ''}`}>
      <i className={props.icon}></i>
    </span>
    {typeof props.path === 'undefined' && <span>{props.text}</span>}
    {props.isTargetBlank && (
      <a href={props.path} target="__blank">
        {props.text}
      </a>
    )}
    {!props.isTargetBlank && props.path && (
      <Link
        to={props.path}
        target={props.isTargetBlank ? '__blank' : undefined}
      >
        {props.text}
      </Link>
    )}
  </div>
);

const Footer: React.FC = () => (
  <footer className="footer py-5 bg-light">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row">
            {footerLinkList.map((v, i) => (
              <div className="col-md-4 col-6 text-nowrap mb-1" key={i}>
                <Link to={v.path}>{v.text}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-3">
        <h6>連絡先</h6>
        <span>hit.bad.team2017@gmail.com</span>
      </section>
      <div className="text-center mt-5 w-100">
        {socailIconLinkList.map((v, i) => (
          <span className="mx-3" key={i}>
            <a href={v.href} target="_blank" rel="noopener noreferrer">
              <img src={v.imgSrc} width="50px" />
            </a>
          </span>
        ))}
      </div>
      <hr className="my-5" />
      <div>
        <small>{`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}</small>
      </div>
    </div>
  </footer>
);

export default Footer;
