import React from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';

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

const IndexPage: React.FC = () => (
  <Layout title="" description="一橋大学バドミントン部のホームページです">
    <section>
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
      <CmpCarousel />
    </section>
  </Layout>
);

export default IndexPage;
