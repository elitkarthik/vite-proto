import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  // ...
  optimizeDeps: {
    include: [
       './src/proto/generated/health_pb.js',
    ]
  },
  build: {
    commonjsOptions: {
    },
  },
  plugins: [commonjs()],
});