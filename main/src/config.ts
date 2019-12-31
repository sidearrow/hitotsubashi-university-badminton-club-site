import configPages, { PageMeta } from "./config/configPages";

const res: { [key: string]: PageMeta } = {};
configPages.map((v) => {
  res[v.path] = v;
});

export default {
  googleSiteVerification: 'IgCCQtyvTcRzPpT3YTUw7-0Zw3ef-2lCa6zcj0Mmoig',
  pages: {
    index: res['/'],
  },
}
