import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link';

const Component: React.FC = () => {
  return (
    <Layout>
      <h1 className="hub-h1">大会結果</h1>
      <Link href="result/league">リーグ戦</Link>
    </Layout>
  )
}

export default Component
