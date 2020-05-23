import React from 'react';

import config from '../../config';

import ImgSocialGithub from '../../assets/img/social-github.svg';
import ImgSocialTwitter from '../../assets/img/social-twitter.svg';
import ImgSocialInstagram from '../../assets/img/social-instagram.svg';
import { CmpNav } from '../nav/nav.cmp';

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
    <div className="container-fluid">
      <CmpNav />
      <hr className="text-center w-25 my-4" />
      <section style={{ textAlign: 'center' }}>
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
      <hr className="text-center w-25 my-4" />
      <section style={{ textAlign: 'center' }}>
        <h6>連絡先</h6>
        <span>hit.bad.team2017@gmail.com</span>
      </section>
      <hr className="text-center w-25 my-4" />
      <div style={{ textAlign: 'center' }}>
        <small>{`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}</small>
      </div>
    </div>
  </footer>
);

export { CmpFooter };
