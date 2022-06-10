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
      ],
      shortcuts: [
        {
          'form-label': 'mb-1 color-white text-5',
        },
        {
          'form-input':
            'w-100% h-14 mb-4 px-2 py-2 border-solid border-size-3 border-rd-1 border-accent text-5 box-border',
        },
        {
          'text-link': 'color-accent text-5',
        },
        {
          'btn-primary':
            'min-h-12 px-3 py-3 color-white bg-tertiary border-rd-1 border-transparent text-5 cursor-pointer transition-property-all transition-timing-linear transition-duration-100 hover-brightness-70',
        },
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
