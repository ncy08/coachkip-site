import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  // Commenting out the server configuration for production deployment
  /*
  server: {
    host: '10.169.141.193',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://10.169.141.193:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: {
      origin: ['http://10.169.141.193:5173'],
      credentials: true
    }
  },
  */
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for assets
    assetsInlineLimit: 4096, // Inline assets below this size
    cssCodeSplit: true, // Enable CSS code splitting
    sourcemap: true, // Generate sourcemaps
    minify: 'esbuild', // Use esbuild for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true // Remove debugger statements in production
      }
    }
  },
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm': 'silent' // Suppress specific warnings
    }
  },
  assetsInclude: ['**/*.lottie', '**/*.json'] // Include .lottie and .json files in the build
});