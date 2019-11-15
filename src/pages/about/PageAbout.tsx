import React from 'react';

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.441488774683!2d139.46829484086692!3d35.71735473297284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e69b620ced03%3A0xf68c4deae0feda0c!2z5LiA5qmL5aSn5a2mIOWwj-W5s-Wbvemam-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1566569776838!5m2!1sja!2sjp';

type Position = {
  position: string;
  name: string;
}
const positions: Position[] = [
  { position: '部長', name: '髙橋 真弓' },
  { position: '監督', name: '小原 貴文' },
  { position: 'コーチ', name: '中山 朋子' },
  { position: '主将', name: '村山 康平' },
  { position: '女子主将', name: '植木 さやか' },
  { position: '主務', name: '佐藤 和貴' }
];
const days = ['月', '火', '水', '木', '金', '土', '日'];
const practiceTimeTableDefault = [
  '16:00 ~ 19:30',
  null,
  '16:00 ~ 19:00',
  null,
  '16:00 ~ 19:00',
  '14:00 ~ 18:30',
  null,
];
const practiceTimeTableVacation = [
  '09:00 ~ 13:00',
  '13:00 ~ 17:00',
  '13:00 ~ 17:00',
  null,
  '09:00 ~ 13:00',
  '13:00 ~ 18:00',
  null,
];

const PageAbout: React.FC = () => {
  const getPositionRow = (position: Position, key: number) => {
    return (
      <div className="row mb-1" key={key}>
        <div className="col-4 col-sm-3 py-1 alert-main">{position.position}</div>
        <div className="col-8 col-sm-9 py-1">{position.name}</div>
      </div>
    );
  }
  const getTimeTableTr = (day: string, def: string|null, vac: string|null, key: number) => {
    return (
      <tr key={key}>
        <th className="text-center alert-main">{day}</th>
        <td className="text-center">{def || '-'}</td>
        <td className="text-center">{vac || '-'}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1 className="title-main">部活情報</h1>
      <h2 className="title-sub">役職</h2>
      <section className="container mb-5">
        {positions.map((position, i) => getPositionRow(position, i))}
      </section>
      <h2 className="title-sub">練習場所</h2>
      <section className="mb-5">
        <div className="mb-2">一橋大学 小平国際キャンパス内 体育館</div>
        <div className="row justify-content-center">
          <div className="text-center col-md-6">
            <iframe src={mapUrl} className="w-100" title="map"></iframe>
          </div>
        </div>
      </section >
      <h2 className="title-sub">練習時間</h2>
      <section className="mt-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr className="alert-main">
                  <th className="text-center"></th>
                  <th className="text-center">授業期</th>
                  <th className="text-center">休業期</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day, i) => getTimeTableTr(day, practiceTimeTableDefault[i], practiceTimeTableVacation[i], i))}
              </tbody>
              <tfoot>
                <tr className="bg-light">
                  <th className="text-center">備考</th>
                  <td>金曜日は男子練</td>
                  <td>水曜日は男子練</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section >
    </div >
  );
};

export default PageAbout;
