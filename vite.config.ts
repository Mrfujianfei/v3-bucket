import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  alias:{
    '@src':'/src/',
    '@pages':'/src/pages',
    '@components':'/src/components/'
  },
})