import React from 'react';
import { Link } from 'gatsby';

import footerLinkList from '../data/footer_link_list.json'
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
}> = (props) => (
  <div className="mb-2">
    <span className={`icon mr-2 ${props.path ? 'text-main' : ''}`}>
      <i className={props.icon}></i>
    </span>
    {typeof props.path === 'undefined'
      && <span>{props.text}</span>}
    {props.isTargetBlank
      && <a href={props.path} target="__blank">{props.text}</a>}
    {!props.isTargetBlank && props.path
      && <Link to={props.path} target={props.isTargetBlank ? '__blank' : undefined}>{props.text}</Link>}
  </div>
);

const Footer: React.FC = () => (
  <footer className="footer py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {footerLinkList.map((v, i) => (
            <FooterIconItem icon='fas fa-chevron-right' key={i} text={v.text} path={v.path} />
          ))}
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <FooterIconItem icon='far fa-envelope' text='hit.bad.team2017@gmail.com' />
          </div>
          <div className="text-center mt-5">
            {socailIconLinkList.map(v => (
              <span className="mx-3">
              <a href={v.href} target="_blank">
                <img src={v.imgSrc} width="50px" />
              </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <small>{`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}</small>
      </div>
    </div>
  </footer>
);

export default Footer;
