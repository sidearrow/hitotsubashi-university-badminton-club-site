import * as React from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';

const imgList = [
  'files/top-img1.jpg',
  'files/top-img2.jpg',
  'files/top-img3.jpg',
];

const IndexPage: React.FC = () => (
  <Layout
    title=""
    description="一橋大学バドミントン部のホームページです"
    isFullWidth={true}
  >
    {/*
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
            */}
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.3rem' }}>
            一橋大学
            <br />
            バドミントン部
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            Hitotsubashi University Badminton Club was established in 1952.
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
