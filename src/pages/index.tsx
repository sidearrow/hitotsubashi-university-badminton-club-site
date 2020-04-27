import * as React from "react"
import Layout from "../components/Layout"
import logo from '../assets/img/logo.svg';
import config from '../config';
import { Carousel } from 'react-bootstrap';

const imgList = [
  'files/img/top-img1.jpg',
  'files/img/top-img2.jpg',
  'files/img/top-img3.jpg',
]

const IndexPage: React.FC = () => (
  <Layout
    title=''
    description='一橋大学バドミントン部のホームページです'
    isFullWidth={true}
  >
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 p-0">
          <Carousel>
            {imgList.map(v => (
              <Carousel.Item>
                <img className="w-100" src={v} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    <section className="container mt-5">
      <div className="text-center">
        <div style={{fontSize: '2.5rem'}}>一橋大学<br/>バドミントン部</div>
        <div>Hitotsubashi University Badminton Club was established in 1952.</div>
      </div>
    </section>
  </Layout>
);

export default IndexPage
