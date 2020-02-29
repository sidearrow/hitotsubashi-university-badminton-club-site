import React from 'react';

import footerLinkList from '../data/footer_link_list.json'
import { Link } from 'gatsby';

const FooterIconItem: React.FC<{
  icon: string;
  text: string;
  path?: string;
  isTargetBlank?: boolean;
}> = (props) => (
  <div style={{ marginBottom: '0.5rem' }}>
    <span className={`icon ${props.path ? 'has-text-primary' : ''}`} style={{ marginRight: '0.25rem' }} >
      <i className={props.icon}></i>
    </span>
    {typeof props.path === 'undefined'
      ? <span>{props.text}</span>
      : <Link to={props.path} target={props.isTargetBlank ? '__blank' : undefined}>{props.text}</Link>}
  </div>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          {footerLinkList.map((v, i) => (
            <FooterIconItem icon='fas fa-chevron-right' text={v.text} path={v.path} />
          ))}
        </div>
        <div className="column is-half">
          <div style={{ marginBottom: '1rem' }}>
            <FooterIconItem icon='far fa-envelope' text='hit.bad.team2017@gmail.com' />
          </div>
          <FooterIconItem icon='fab fa-twitter' text='Twitter' path='https://twitter.com/hit_u_bad' isTargetBlank={true} />
          <FooterIconItem icon='fab fa-github' text='GitHub' path='https://github.com/sidearrow/hit-u-bad' isTargetBlank={true} />
        </div>
      </div>
      <hr className="spacer is-1" />
      <div className="has-text-centered is-size-7">{`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}</div>
    </div>
  </footer>
);

export default Footer;
