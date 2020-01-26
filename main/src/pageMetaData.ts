export type PageMetadata = {
  title: string;
  path: string;
  description: string;
  breadcrumb: {
    text: string;
    path: string;
  }[];
};

const pageMetadata: { [key in string]: PageMetadata } = {
  index: {
    title: 'HOME',
    path: '/',
    description: '一橋大学体育会バドミントン部は、関東学生バドミントン連盟男子 4 部、女子 5 部に所属し、リーグでの昇格を目指して週 3 ～ 5 日練習に取り組んでいます。',
    breadcrumb: [],
  },
  infoMember: {
    title: '部員情報',
    path: '/info/member',
    description: '2018年7月現在、私達一橋大学バドミントン部は男子22名、女子5名の計25名で活動しています。',
    breadcrumb: [],
  },
  infoAnnualSchedule: {
    title: '年間スケジュール',
    path: '/info/annual-schedule',
    description: '一橋大学バドミントン部の年間スケジュールです。',
    breadcrumb: [],
  },
  resultSansho: {
    title: '三商戦 結果',
    path: '/result/sansho',
    description: '三商戦の結果です。毎年開催される、神戸大学・大阪市立大学との定期戦です。',
    breadcrumb: [],
  },
  bbs: {
    title: '掲示板',
    path: '/bbs',
    description: '他大の方の書き込みも大歓迎です。練習試合のお誘いなどありましたらどうぞ。新歓関係などの個人的な質問はCONTACTからメールでも受け付けています。興味のある方は是非ともご連絡を。',
    breadcrumb: [],
  },
  mizutori: {
    title: 'みずとり会',
    path: '/mizutori',
    description: 'みずとり会のページです',
    breadcrumb: [],
  },
};

export default pageMetadata;
