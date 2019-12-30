import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default {
  googleSiteVerification: publicRuntimeConfig.env.googleSiteVerification,
  firebase: {
    apiKey: publicRuntimeConfig.env.firebaseApiKey,
    authDomain: publicRuntimeConfig.env.firebaseAuthDomain,
    projectId: publicRuntimeConfig.env.firebaseProjectId,
    storageBucket: publicRuntimeConfig.env.firebaseStorageBucket,
  },
  mizutoriMailAddress: publicRuntimeConfig.env.mizutoriMailAddress,
}
