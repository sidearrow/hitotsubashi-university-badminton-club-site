import data from './meta_data.json'

export default function (path) {
  return {
    title: data.pages[path].title,
    titleTemplate: data.titleTemplate,
  }
}
