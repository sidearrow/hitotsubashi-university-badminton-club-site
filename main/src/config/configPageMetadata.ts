export type PageKey = 'index'
  | 'infoIndex'
  | 'infoMember'
  | 'infoAnnualSchedule'
  | 'resultIndex'
  | 'resultLeague'
  | 'resultSansho'
  | 'santama'
  | 'bbs'
  | 'mizutori'
  | '404'
  ;

export type PageMetadata = {
  title: string | null;
  path: string;
  description: string;
  breadcrumb: string[];
};

const pageMetadata: { [key in PageKey]: PageMetadata } = {
  index: {
    title: 'HOME',
    path: '/',
    description: '一橋大学体育会バドミントン部は、関東学生バドミントン連盟男子 4 部、女子 5 部に所属し、リーグでの昇格を目指して週 3 ～ 5 日練習に取り組んでいます。',
    breadcrumb: ['index'],
  },
  infoIndex: {
    title: '部活情報',
    path: '/info',
    description: '一橋大学体育会バドミントン部は、関東学生バドミントン連盟男子 4 部、女子 5 部に所属し、リーグでの昇格を目指して週 3 ～ 5 日練習に取り組んでいます。',
    breadcrumb: ['index', 'infoIndex'],
  },
  infoMember: {
    title: '部員情報',
    path: '/info/member',
    description: '2018年7月現在、私達一橋大学バドミントン部は男子22名、女子5名の計25名で活動しています。',
    breadcrumb: ['index', 'infoIndex', 'infoMember'],
  },
  infoAnnualSchedule: {
    title: '年間スケジュール',
    path: '/info/annual-schedule',
    description: '一橋大学バドミントン部の年間スケジュールです。',
    breadcrumb: ['index', 'infoIndex', 'infoMember'],
  },
  resultIndex: {
    title: '試合結果',
    path: '/result',
    description: '',
    breadcrumb: ['index', 'resultIndex'],
  },
  resultLeague: {
    title: 'リーグ戦結果',
    path: '/result/league',
    description: '関東学生バドミントン連盟リーグ、リーグ戦の結果です',
    breadcrumb: ['index', 'resultIndex', 'resultLeague'],
  },
  resultSansho: {
    title: '三商戦 結果',
    path: '/result/sansho',
    description: '三商戦の結果です。毎年開催される、神戸大学・大阪市立大学との定期戦です。',
    breadcrumb: ['index', 'resultIndex', 'resultSansho'],
  },
  bbs: {
    title: '掲示板',
    path: '/bbs',
    description: '他大の方の書き込みも大歓迎です。練習試合のお誘いなどありましたらどうぞ。新歓関係などの個人的な質問はCONTACTからメールでも受け付けています。興味のある方は是非ともご連絡を。',
    breadcrumb: ['index', 'bbs'],
  },
  santama: {
    title: '三多摩大会',
    path: '/santama',
    description: '三多摩地区学生バドミントン選手権大会',
    breadcrumb: ['index', 'santama'],
  },
  mizutori: {
    title: 'みずとり会',
    path: '/mizutori',
    description: 'みずとり会のページです',
    breadcrumb: ['index', 'mizutori'],
  },
  "404": {
    title: 'ページが見つかりません',
    path: '/404',
    description: 'ページが見つかりません',
    breadcrumb: [],
  }
};

export default pageMetadata;
