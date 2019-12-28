import React from "react"

import Layout from "../components/layout"

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
  <Layout>
    <h1 className="hub-h1">部活情報</h1>
    <h2 className="hub-h2">役職</h2>
    <section className="container mb-5">
      {positions.map((position, i) => (
        <div className="row mb-1 justify-content-center" key={i}>
          <div className="col-4 col-md-3 py-1 alert-secondary">{position.positionName}</div>
          <div className="col-8 col-md-6 py-1">{position.name}</div>
        </div>
      ))}
    </section>
    <h2 className="hub-h2">練習場所</h2>
    <section className="mb-5">
      <div className="mb-2">一橋大学 小平国際キャンパス内 体育館</div>
      <div className="row justify-content-center">
        <div className="text-center col-md-6">
          { /*<iframe :src="mapUrl" className="w-100" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
        </div>
      </div>
    </section>
    <h2 className="hub-h2">練習時間</h2>
    <section className="mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr className="alert-secondary">
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
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
