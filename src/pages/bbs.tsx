import React from 'react'
import Layout from '../components/layout';

const pageDiscription = "他大の方の書き込みも大歓迎です。練習試合のお誘いなどありましたらどうぞ。"
  + "\n新歓関係などの個人的な質問はCONTACTからメールでも受け付けています。興味のある方は是非ともご連絡を。";

const Component: React.FC = () => {
  return (
    <Layout isShowPageTitle={true} pageTitle="掲示板" pageSubTitle={pageDiscription}>
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
