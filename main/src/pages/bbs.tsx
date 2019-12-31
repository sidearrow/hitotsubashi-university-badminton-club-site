import React from 'react'
import Layout from '../components/layout';
import config from '../config/configIndex';

const Component: React.FC = () => {
  return (
    <Layout pageMetadata={config.pageMetadata.bbs}>
      <section>
        <p>掲示板はこちらのリンクからご確認ください。</p>
        <a href="http://hitotsubashibad.bbs.fc2.com/" target="_blank">新掲示板</a>
        <br />
        <a href="http://bbs.mottoki.com/?bbs=ikkyo_bad" target="_blank">旧掲示板</a>
      </section>
    </Layout>
  )
}

export default Component
