import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Unocss({
      presets: [presetUno()],
      rules: [
        [
          'bg-0',
          {
            'background-color': '#2a0944',
          },
        ],
        [
          'bg-1',
          {
            'background-color': '#3B185F',
          },
        ],
        [
          'bg-2',
          {
            'background-color': '#A12568',
          },
        ],
        [
          'bg-3',
          {
            'background-color': '#FFC107',
          },
        ],
        [
          'form-label',
          {
            'margin-bottom': '10px',
            color: '#fff',
            'font-size': '18px',
          },
        ],
        [
          'form-input',
          {
            height: '50px',
            'margin-bottom': '15px',
            padding: '10px',
            border: 'solid 3px #ffc107',
            'border-radius': '5px',
            'font-size': '18px',
          },
        ],
        [
          'text-link',
          {
            color: '#ffc107',
            'font-size': '18px',
          },
        ],
        [
          'btn-primary',
          {
            'min-height': '50px',
            padding: '15px',
            color: '#fff',
            'background-color': '#a12568',
            'border-radius': '5px',
            border: '0px',
            'font-size': '18px',
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
