import React from 'react';
import { Link } from 'gatsby';

import footerLinkList from '../data/footer_link_list.json'
import config from '../config';

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
          <FooterIconItem icon='fab fa-twitter' text='Twitter' path={config.url.twitter} isTargetBlank={true} />
          <FooterIconItem icon='fab fa-instagram' text='Instagram' path={config.url.instagram} isTargetBlank={true} />
          <FooterIconItem icon='fab fa-github' text='GitHub' path={config.url.github} isTargetBlank={true} />
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
