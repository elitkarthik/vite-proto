import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  optimizeDeps: {
    include: [
    //   './src/proto/generated/health.ts',
    //   './src/proto/generated/health.client.ts',
    ]
  },
  build: {
    commonjsOptions: {
      include: [/proto/],      
    },
  },
});