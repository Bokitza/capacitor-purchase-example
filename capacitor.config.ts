import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'soundapp.drorsoft.com',
  appName: 'sound-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
