import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'egq490jl',
    dataset: 'production',
  },
  studioHost: 'senquentia',
  autoUpdates: true,
});
