import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "url";
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 1024,
    host: "0.0.0.0",
  },
  plugins: [
    vue(),
    // 按需自动导入API
    AutoImport({ imports: ["vue","vue-router","pinia"], resolvers: [ElementPlusResolver()] }),
    // 按需自动导入组件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
