import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/css/output.css',
    './src/**/*.ts',
    './src/font/FontStylesheet.css',
  ],
  theme: {
    extend: {
      lineClamp: {
        15: '15',
      },
    },
    fontFamily: {
      plusBlack: 'plusBlack',
      plusBold: 'plusBold',
      plusExtraBold: 'plusExtraBold',
      plusLight: 'plusLight',
      plusRegular: 'plusRegular',
      plusMedium: 'plusMedium',
      plusThin: 'plusThin',
    },
  },
  plugins: [],
  base: '/finalProject/',
} satisfies Config;
