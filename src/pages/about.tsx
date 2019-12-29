import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const positions = [
  {
    positionName: '部長',
    name: '髙橋 真弓',
  },
  {
    positionName: '監督',
    name: '小原 貴文',
  },
  {
    positionName: 'コーチ',
    name: '中山 朋子',
  },
  {
    positionName: '主将',
    name: '村山 康平',
  },
  {
    positionName: '女子主将',
    name: '植木 さやか',
  },
  {
    positionName: '主務',
    name: '佐藤 和貴',
  },
];
const practiceTimeTableContent = [
  {
    title: '月',
    default: '16:00 ~ 19:30',
    vacation: '09:00 ~ 13:00',
  },
  {
    title: '火',
    default: null,
    vacation: '13:00 ~ 17:00',
  },
  {
    title: '水',
    default: '16:00 ~ 19:00',
    vacation: '13:00 ~ 17:00',
  },
  {
    title: '木',
    default: null,
    vacation: null,
  },
  {
    title: '金',
    default: '16:00 ~ 19:00',
    vacation: '09:00 ~ 13:00',
  },
  {
    title: '土',
    default: '14:00 ~ 18:30',
    vacation: '13:00 ~ 18:00',
  },
  {
    title: '日',
    default: null,
    vacation: null,
  },
  {
    title: '備考',
    default: '金曜日は男子練',
    vacation: '水曜日は男子練',
  }
];

const AboutPage: React.FC = () => (
  <Layout isShowPageTitle={true} pageTitle="部活情報" pageSubTitle={null}>
    <SEO title="部活情報" />
    <section>
      <h2 className="hub-h2">役職</h2>
      <div className="container">
        {positions.map((position, i) => (
          <div className="row mb-2">
            <div className="col-6 col-md-4 p-2 alert-secondary font-weight-bold">{position.positionName}</div>
            <div className="col-6 col-md-8 py-2">{position.name}</div>
          </div>
        ))}
      </div>
    </section>
    <section className="mt-5">
      <h2 className="hub-h2">練習場所</h2>
      <div className="mb-2">一橋大学 小平国際キャンパス内 体育館</div>
      <div className="row justify-content-center">
        <div className="text-center col-md-6">
          { /*<iframe :src="mapUrl" className="w-100" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
        </div>
      </div>
    </section>
    <section className="mt-5">
      <h2 className="hub-h2">練習時間</h2>
      <table className="table table-bordered">
        <thead className="alert-secondary">
          <tr>
            <th className="text-center"></th>
            <th className="text-center">授業期</th>
            <th className="text-center">休業期</th>
          </tr>
        </thead>
        <tbody>
          {practiceTimeTableContent.map((row, i) => (
            <tr key={i}>
              <th className="text-center alert-secondary">{row.title}</th>
              <td className="text-center">{row.default || '-'}</td>
              <td className="text-center">{row.vacation || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </Layout>
)

export default AboutPage
