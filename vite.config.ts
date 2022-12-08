import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [vue(), ssr({ prerender: true })],
  build: {
    cssCodeSplit: false,
  },
};

export default config;
