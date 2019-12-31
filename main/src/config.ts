import configPages from "./config/configPages";

export type PageMeta = {
  title: string;
  path: string;
  description: string | null;
  breadclumb: string[];
};

const res: { [key: string]: {} } = {};
configPages.map((v) => {
  res[v.path] = v;
});

export default {
  googleSiteVerification: 'IgCCQtyvTcRzPpT3YTUw7-0Zw3ef-2lCa6zcj0Mmoig',
  pages: {},
}
