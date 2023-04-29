import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
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
});
