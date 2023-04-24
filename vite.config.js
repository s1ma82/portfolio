import path from 'path'
import { defineConfig } from 'vite'
import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx",
  }, 
  server: {
    port: 3000,
    
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
  plugins: [react(), alias()],
})
