/* eslint-disable object-curly-newline */
/** @type {import('tailwindcss').Config} */

const dangerColors = {
  'danger-50': 'hsl(360, 100%, 97%)',
  'danger-100': 'hsl(360, 82%, 89%)',
  'danger-200': 'hsl(360, 77%, 78%)',
  'danger-300': 'hsl(360, 71%, 66%)',
  'danger-400': 'hsl(360, 64%, 55%)',
  'danger-500': 'hsl(360, 67%, 44%)',
  'danger-600': 'hsl(360, 72%, 38%)',
  'danger-700': 'hsl(360, 79%, 32%)',
  'danger-800': 'hsl(360, 85%, 25%)',
  'danger-900': 'hsl(360, 92%, 20%)',
};

const warningColors = {
  'warning-50': 'hsl(45, 100%, 96%)',
  'warning-100': 'hsl(45, 90%, 88%)',
  'warning-200': 'hsl(45, 86%, 81%)',
  'warning-300': 'hsl(43, 90%, 76%)',
  'warning-400': 'hsl(43, 89%, 70%)',
  'warning-500': 'hsl(42, 78%, 60%)',
  'warning-600': 'hsl(42, 63%, 48%)',
  'warning-700': 'hsl(43, 72%, 37%)',
  'warning-800': 'hsl(43, 77%, 27%)',
  'warning-900': 'hsl(43, 86%, 17%)',
};

const successColors = {
  'success-50': 'hsl(201, 100%, 96%)',
  'success-100': 'hsl(200, 88%, 90%)',
  'success-200': 'hsl(200, 71%, 80%)',
  'success-300': 'hsl(200, 66%, 69%)',
  'success-400': 'hsl(200, 60%, 58%)',
  'success-500': 'hsl(200, 54%, 49%)',
  'success-600': 'hsl(200, 59%, 43%)',
  'success-700': 'hsl(200, 68%, 35%)',
  'success-800': 'hsl(200, 72%, 31%)',
  'success-900': 'hsl(200, 82%, 24%)',
};

const primaryColors = {
  'primary-50': 'hsl(82, 87%, 94%)',
  'primary-100': 'hsl(84, 77%, 86%)',
  'primary-200': 'hsl(83, 68%, 74%)',
  'primary-300': 'hsl(83, 63%, 61%)',
  'primary-400': 'hsl(83, 55%, 52%)',
  'primary-500': 'hsl(83, 64%, 42%)',
  'primary-600': 'hsl(83, 70%, 34%)',
  'primary-700': 'hsl(83, 74%, 27%)',
  'primary-800': 'hsl(81, 78%, 21%)',
  'primary-900': 'hsl(81, 86%, 14%)',
};

const secondaryColors = {
  'accent-50': 'hsl(22, 100%, 95%)',
  'accent-100': 'hsl(22, 100%, 86%)',
  'accent-200': 'hsl(22, 92%, 76%)',
  'accent-300': 'hsl(21, 83%, 64%)',
  'accent-400': 'hsl(22, 78%, 55%)',
  'accent-500': 'hsl(22, 71%, 45%)',
  'accent-600': 'hsl(22, 74%, 38%)',
  'accent-700': 'hsl(22, 79%, 31%)',
  'accent-800': 'hsl(22, 80%, 26%)',
  'accent-900': 'hsl(22, 83%, 19%)',
};

const neutralColors = {
  'neutral-50': 'hsl(0, 0%, 97%)',
  'neutral-100': 'hsl(0, 0%, 88%)',
  'neutral-200': 'hsl(0, 0%, 81%)',
  'neutral-300': 'hsl(0, 0%, 69%)',
  'neutral-400': 'hsl(0, 0%, 62%)',
  'neutral-500': 'hsl(0, 0%, 49%)',
  'neutral-600': 'hsl(0, 0%, 49%)',
  'neutral-700': 'hsl(0, 0%, 32%)',
  'neutral-800': 'hsl(0, 0%, 23%)',
  'neutral-900': 'hsl(0, 0%, 13%)',
  'neutral-50/alpha-10': 'hsl(0, 0%, 97%, 10%)',
  'neutral-900/alpha-97': 'hsl(0, 0%, 13%, 97%)',
};

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      text: '60ch',
    },
    extend: {
      colors: {
        ...primaryColors,
        ...secondaryColors,
        ...neutralColors,
        ...dangerColors,
        ...warningColors,
        ...successColors,
      },
      fontFamily: { title: ['Merriweather', 'serif'], content: ['Poppins', 'sans-serif'] },
    },
    screen: {
      xs: '480px',
    },
  },
  plugins: [],
};
