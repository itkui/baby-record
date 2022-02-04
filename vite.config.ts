import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: '0.0.0.0',
    port: 2019
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components/'),
      '@': resolve(__dirname, 'src')
    }
  }
});
