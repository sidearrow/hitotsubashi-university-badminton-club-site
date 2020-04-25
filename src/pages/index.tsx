import * as React from "react"
import Layout from "../components/Layout"
import logo from '../assets/img/logo.svg';

const IndexPage: React.FC = () => (
  <Layout>
    <section>
      <div className="text-center mb-3">
        <img src={logo} />
      </div>
      <div className="text-center">
        <div className="display-4">一橋大学</div>
        <div className="display-4">バドミントン部</div>
        <div>Hitotsubashi University Badminton Club was established in 1952.</div>
      </div>
    </section>
    <section className="form-row mt-5">
      <div className="col-6">
        <a target="_blank" href="https://twitter.com/hit_u_bad" className="btn btn-block btn-outline-main py-3">Twitter</a>
      </div>
      <div className="col-6">
        <a href="#" className="btn btn-block btn-outline-main py-3">Instagram</a>
      </div>
    </section>
  </Layout>
);

export default IndexPage
