import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon/favicon.ico', 'favicon/apple-touch-icon.png', 'favicon/favicon.svg'],
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png}', '**/images/**/*.svg'],
        globIgnores: [
          '**/images/LSB-Radix.svg',
          '**/images/MSB-Radix.svg',
          '**/images/REWE.svg',
          '**/images/memo.svg',
          '**/images/Ecommerce.svg',
          '**/images/ecommers.svg'
        ],
        maximumFileSizeToCacheInBytes: 2 * 1024 * 1024, // Keep default 2MB
        runtimeCaching: [
          {
            // Cache large SVGs on demand (not precached)
            urlPattern: /\/images\/(LSB-Radix|MSB-Radix|REWE|memo|Ecommerce|ecommers)\.svg$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'large-images-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },
          {
            // Cache other images
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Khaled - Frontend Developer',
        short_name: 'Khaled Dev',
        description: 'Portfolio von Khaled - Frontend Developer spezialisiert auf Web & Mobile Applications',
        theme_color: '#213555',
        background_color: '#213555',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'favicon/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Avoid eval in production builds
        format: 'es',
        generatedCode: 'es2015'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  define: {
    // Ensure no eval usage in build
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
});
