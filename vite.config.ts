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
          primary: '#F7F7F7',
          secondary: '#EEEEEE',
          tertiary: '#393E46',
          accent: '#929AAB',
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
