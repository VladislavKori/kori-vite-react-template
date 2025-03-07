import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@entities": path.resolve("src/entities"),
      "@features": path.resolve("src/features"),
      "@pages": path.resolve("src/pages"),
      "@shared": path.resolve("src/shared"),
      "@widgets": path.resolve("src/widgets"),
    },
  },
})
