import React from 'react';
import { Link } from 'gatsby';

import footerLinkList from './footer-links.json';
import config from '../../config';

import ImgSocialGithub from '../../assets/img/social-github.svg';
import ImgSocialTwitter from '../../assets/img/social-twitter.svg';
import ImgSocialInstagram from '../../assets/img/social-instagram.svg';

const socailIconLinkList = [
  { imgSrc: ImgSocialTwitter, href: config.url.twitter },
  { imgSrc: ImgSocialInstagram, href: config.url.instagram },
  { imgSrc: ImgSocialGithub, href: config.url.github },
];

const CmpFooter: React.FC = () => (
  <footer
    className="bg-light"
    style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
  >
    <div className="container" style={{ textAlign: 'center' }}>
      <section>
        {footerLinkList.map((v, i) => (
          <Link
            to={v.path}
            key={i}
            style={{ marginRight: '0.5rem', display: 'inline-block' }}
          >
            {v.text}
          </Link>
        ))}
      </section>
      <hr />
      <section>
        {socailIconLinkList.map((v, i) => (
          <a
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            style={{ margin: '0 1rem' }}
          >
            <img src={v.imgSrc} width="50px" />
          </a>
        ))}
      </section>
      <hr />
      <section>
        <h6>連絡先</h6>
        <span>hit.bad.team2017@gmail.com</span>
      </section>
      <hr className="my-5" />
      <div>
        <small>{`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}</small>
      </div>
    </div>
  </footer>
);

export { CmpFooter };
