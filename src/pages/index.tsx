import * as React from 'react';
import Layout from '../components/Layout';
import { CmpIndexPageLinks } from '../components/index-page/index-page-links.cmp';
import { Link } from 'gatsby';
import { Carousel } from 'react-bootstrap';
import { CmpTwitterTimeline } from '../components/twitter-tImeline.cmp';

import ImgSocialTwitter from '../assets/img/social-twitter.svg';
import ImgSocialInstagram from '../assets/img/social-instagram.svg';
import config from '../config';

const socailIconLinkList = [
  { imgSrc: ImgSocialTwitter, href: config.url.twitter },
  { imgSrc: ImgSocialInstagram, href: config.url.instagram },
];

const imgList = [
  'files/top-img1.jpg',
  'files/top-img2.jpg',
  'files/top-img3.jpg',
];

const CmpCarousel: React.FC = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="p-0" style={{ maxWidth: '540px' }}>
        <Carousel>
          {imgList.map((v, i) => (
            <Carousel.Item key={i}>
              <img className="w-100" src={v} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

const CmpSocailIcons: React.FC = () => (
  <div className="row justify-content-center">
    <div className="col-md-3"></div>
  </div>
);

const IndexPage: React.FC = () => (
  <Layout title="" description="一橋大学バドミントン部のホームページです">
    <section className="mt-5">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem' }}>
          一橋大学
          <br />
          バドミントン部
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          Hitotsubashi University Badminton Club was established in 1952.
        </div>
      </div>
    </section>
    <section className="mt-5">
      <CmpIndexPageLinks />
    </section>
    <section className="mt-5">
      <div className="form-row">
        <div className="col-md-4 mb-2">
          <Link className="btn btn-bg btn-block btn-outline-main" to="/santama">
            三多摩大会のご案内
          </Link>
        </div>
        <div className="col-md-4 mb-2">
          <Link className="btn btn-bg btn-block btn-outline-main" to="/santama">
            みずとり会のページ
          </Link>
        </div>
        <div className="col-md-4 mb-2">
          <Link className="btn btn-bg btn-block btn-outline-main" to="/santama">
            掲示板
          </Link>
        </div>
      </div>
    </section>
    <section className="mt-5">
      <CmpCarousel />
    </section>
    <section className="mt-5">
      <CmpTwitterTimeline />
    </section>
  </Layout>
);

export default IndexPage;
