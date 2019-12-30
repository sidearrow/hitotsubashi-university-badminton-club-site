import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link';

const Component: React.FC = () => {
  return (
    <Layout isShowPageTitle={true} pageTitle="大会結果">
      <section className="section">
        <Link href="result/league">リーグ戦</Link>
      </section>
    </Layout>
  )
}

export default Component
