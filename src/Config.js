export default {
  firebase: {
    apiKey: "AIzaSyDg0ZjCJcRIelfIz-08n8cC2o4dnJyo5VQ",
    authDomain: "hitbadhp-191612.firebaseapp.com",
    databaseURL: "https://hitbadhp-191612.firebaseio.com",
    projectId: "hitbadhp-191612",
    storageBucket: "hitbadhp-191612.appspot.com",
    messagingSenderId: "580670960385",
  },
  disqus: {
    script: function (url, identifier) {
      return `var disqus_config=function(){this.page.url='${url}';this.page.identifier='${identifier}';};(function(){var d=document,s=d.createElement('script');s.src='https://https-hitbad-tk.disqus.com/embed.js';s.setAttribute('data-timestamp', +new Date());(d.head||d.body).appendChild(s);})();`;
    },
    src: 'https://https-hitbad-tk.disqus.com/count.js',
  },
  bbs: {
    old_a: 'http://hitotsubashibad.bbs.fc2.com/',
    old_b: 'http://bbs.mottoki.com/?bbs=ikkyo_bad',
  },
  ghBaseUrl: `//${location.hostname}/static/json/`,
  mizutoriPassword: 'komaakio',
}