import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'DevGram 🧑‍💻',
        short_name: 'DevGram 🧑‍💻',
        description: 'A Vite-powered Progressive Web App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://i.pinimg.com/736x/42/59/84/4259844495a826b3ed7f39672bb4c1a1.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://i.pinimg.com/736x/42/59/84/4259844495a826b3ed7f39672bb4c1a1.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
      }
    })
  ]
});
