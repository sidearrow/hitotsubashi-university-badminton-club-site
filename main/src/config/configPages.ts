export default [
  {
    title: 'HOME',
    path: '/',
    description: null,
    breadcrumb: ['index'],
  },
  {
    title: '部活情報',
    path: '/info',
    description: '関東学生バドミントン連盟男子は4部、女子は5部に所属しています。'
      + "\n男女・経験者大学始め関係なく、リーグでの昇格を目指して日々練習に励んでいます。",
    breadcrumb: ['index', 'info'],
  },
  {
    title: '部員情報',
    path: '/info/member',
    description: '2018年7月現在、私達一橋大学バドミントン部は男子22名、女子5名の計25名で活動しています。',
    breadcrumb: ['index', 'info', 'info_member'],
  },
  {
    title: '年間スケジュール',
    path: '/info/annual-schedule',
    description: '一橋大学バドミントン部の年間スケジュールです。',
    breadcrumb: ['index', 'info', 'info_member'],
  },
  {
    title: '試合結果',
    path: '/result',
    description: '',
    breadcrumb: ['index', 'result'],
  },
  {
    title: 'リーグ戦結果',
    path: '/result/league',
    description: '関東学生バドミントン連盟リーグ、リーグ戦の結果です',
    breadcrumb: ['index', 'result', 'league'],
  },
];
