/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()],
      theme: {
        colors: {
          primary: '#2a0944',
          secondary: '#3B185F',
          tertiary: '#A12568',
          accent: '#FFC107',
        },
      },
      rules: [
        [
          'transition-timing-linear',
          {
            'transition-timing-function': 'linear',
          },
        ],
        [
          'break-word',
          {
            'word-break': 'break-word',
          },
        ],
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: __dirname,
      },
    ],
  },
});
