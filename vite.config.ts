import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          services: path.resolve(__dirname, 'services.html'),
          incinerators: path.resolve(__dirname, 'incinerators.html'),
          process: path.resolve(__dirname, 'process.html'),
          ash: path.resolve(__dirname, 'ash.html'),
          prototype: path.resolve(__dirname, 'prototype.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          faq: path.resolve(__dirname, 'faq.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
  };
});
