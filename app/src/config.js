export default {
  url: {
    top     : '/',
    member  : '/member',
    result  : '/result',
    santama : '/santama',
    bbs     : '/bbs/posts',
    bbsNew  : '/bbs/new',
    mizutori: '/mizutori',
    manage  : '/manage',
  },
  title: {
    top     : '一橋大学 バドミントン部',
    member  : '部員紹介 - 一橋大学 バドミントン部',
    result  : '試合結果 - 一橋大学 バドミントン部',
    santama : '三多摩大会 - 一橋大学 バドミントン部',
    bbs     : '掲示板 - 一橋大学 バドミントン部',
    bbsNew  : '掲示板 新規投稿 - 一橋大学 バドミントン部',
    mizutori: 'みずとり会 - 一橋大学 バドミントン部',
  },
  apiBaseUrl: {
    development: 'https://asia-northeast1-dev-hit-u-bad-3a8d2.cloudfunctions.net/api',
    production : 'https://asia-northeast1-hit-u-bad.cloudfunctions.net/api/v1'
  },
  firebase: {
    dev: {
      apiKey: "AIzaSyC_VaJeym5oxGZrrVVXxRCJDQ3fZdb34PM",
      authDomain: "dev-hit-u-bad.firebaseapp.com",
      storageBucket: "dev-hit-u-bad.appspot.com",
    }
  },
  obmsg: {
    list: [
      { year: 2018, month: [1, 2, 3, 4] },
      { year: 2017, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { year: 2016, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { year: 2015, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { year: 2014, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { year: 2013, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { year: 2012, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12] },
      { year: 2011, month: [11, 12] },
      { year: 2010, month: [] },
      { year: 2009, month: [1, 2, 3, 4, 5] },
      { year: 2008, month: [1, 3, 4, 5, 6, 7] },
      { year: 2007, month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
      { year: 2006, month: [8] },
      { year: 2005, month: [1, 2, 3, 4, 5, 6, 7, 8] },
    ],
    getHref: (year, month) => ( '/public/static/obmsg/obmessage_' +
                                year +
                                ('0' + month).substr(-2) +
                                '.' +
                                (year < 2013 || (year === 2013 && month <= 4) ? 'html' : 'pdf') ),
    getName: (year, month) => ( year <= 2009 ? `第${month}号` : `${month}月号` ),
  }
}