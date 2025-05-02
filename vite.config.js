import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'; // Or your framework plugin
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  // ...
  optimizeDeps: {
    include: [
       './src/proto/generated/health_grpc_web_pb.js',
    //   './src/proto/generated/health.client.ts',
    ]
  },
  build: {
    commonjsOptions: {
      include: [/proto/],    
      transformMixedEsModules: true,  
    },
  },
  plugins: [
    vue(), // Or your framework plugin
    viteCommonjs({
      include: ['./src/proto/generated'], // Include the proto directory for commonjs conversion
    }),
  ],
});