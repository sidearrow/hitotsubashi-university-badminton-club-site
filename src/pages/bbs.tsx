import React from 'react'
import Layout from '../components/layout';

const Component: React.FC = () => {
  return (
    <Layout isShowPageTitle={true} pageTitle="掲示板" pageSubTitle={null}>
      <section>
        <div className="alert alert-info">
            <p>掲示板はこちらのリンクからご確認ください。</p>
            <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">新掲示板</a>
            <br />
            <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板</a>
        </div>
      </section>
    </Layout>
  )
}

export default Component

