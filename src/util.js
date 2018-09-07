import config from '@/config'

export const buildApiPath = function (path) {
  return config.apiBaseDev + path
}