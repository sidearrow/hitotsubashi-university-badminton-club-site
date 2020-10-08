import Link from 'next/link';
import React from 'react';
import { Layout } from '../components/Layout';

const TITLE = '大会情報';
const DESCRIPTION = '大会情報';

const Component: React.FC = () => {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <h1 className="h1">{TITLE}</h1>
      <h2 className="h2">リーグ戦</h2>
      <section>
        関東学生バドミントン連盟リーグ戦は年二回、春と秋に開催されます。 結果は
        <Link href="/league-result">
          <a>こちら</a>
        </Link>
        をご覧ください。
      </section>
      <h2 className="h2">東商戦</h2>
      <section>東商戦は、年三回開催される、東京大学との定期戦です。</section>
      <h2 className="h2">三商戦</h2>
      <section>
        三商戦は、毎年冬に開催される、神戸大学・大阪市立大学との定期戦です。
      </section>
      <h2 className="h2">国公立大会</h2>
      <section>
        毎年春に開催される、東京の国公立大学が参加する大会です。
      </section>
      <h2 className="h2">理工系大会</h2>
      <section>毎年秋に開催される大会です。</section>
      <h2 className="h2">三多摩大会</h2>
      <section>
        本学主催の大会です。詳細は
        <Link href="/santama">
          <a>こちら</a>
        </Link>
        をご覧ください。
      </section>
    </Layout>
  );
};

export default Component;
