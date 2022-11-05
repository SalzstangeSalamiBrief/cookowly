/** @type {import('tailwindcss').Config} */

const dangerColors = {
  'danger-50': 'hsl(0, 100%, 100%)',
  'danger-100': 'hsl(0, 100%, 100%)',
  'danger-200': 'hsl(0, 100%, 100%)',
  'danger-300': 'hsl(0, 100%, 100%)',
  'danger-400': 'hsl(0, 100%, 100%)',
  'danger-500': 'hsl(0, 100%, 100%)',
  'danger-600': 'hsl(0, 100%, 100%)',
  'danger-700': 'hsl(0, 100%, 100%)',
  'danger-800': 'hsl(0, 100%, 100%)',
  'danger-900': 'hsl(0, 100%, 100%)',
};

const warningColors = {
  'warning-50': 'hsl(0, 100%, 100%)',
  'warning-100': 'hsl(0, 100%, 100%)',
  'warning-200': 'hsl(0, 100%, 100%)',
  'warning-300': 'hsl(0, 100%, 100%)',
  'warning-400': 'hsl(0, 100%, 100%)',
  'warning-500': 'hsl(0, 100%, 100%)',
  'warning-600': 'hsl(0, 100%, 100%)',
  'warning-700': 'hsl(0, 100%, 100%)',
  'warning-800': 'hsl(0, 100%, 100%)',
  'warning-900': 'hsl(0, 100%, 100%)',
};

const successColors = {
  'success-50': 'hsl(0, 100%, 100%)',
  'success-100': 'hsl(0, 100%, 100%)',
  'success-200': 'hsl(0, 100%, 100%)',
  'success-300': 'hsl(0, 100%, 100%)',
  'success-400': 'hsl(0, 100%, 100%)',
  'success-500': 'hsl(0, 100%, 100%)',
  'success-600': 'hsl(0, 100%, 100%)',
  'success-700': 'hsl(0, 100%, 100%)',
  'success-800': 'hsl(0, 100%, 100%)',
  'success-900': 'hsl(0, 100%, 100%)',
};

const primaryColors = {
  'primary-50': 'hsl(0, 100%, 100%)',
  'primary-100': 'hsl(0, 100%, 100%)',
  'primary-200': 'hsl(0, 100%, 100%)',
  'primary-300': 'hsl(0, 100%, 100%)',
  'primary-400': 'hsl(0, 100%, 100%)',
  'primary-500': 'hsl(0, 100%, 100%)',
  'primary-600': 'hsl(0, 100%, 100%)',
  'primary-700': 'hsl(0, 100%, 100%)',
  'primary-800': 'hsl(0, 100%, 100%)',
  'primary-900': 'hsl(0, 100%, 100%)',
};

const accentColors = {
  'accent-50': 'hsl(0, 100%, 100%)',
  'accent-100': 'hsl(0, 100%, 100%)',
  'accent-200': 'hsl(0, 100%, 100%)',
  'accent-300': 'hsl(0, 100%, 100%)',
  'accent-400': 'hsl(0, 100%, 100%)',
  'accent-500': 'hsl(0, 100%, 100%)',
  'accent-600': 'hsl(0, 100%, 100%)',
  'accent-700': 'hsl(0, 100%, 100%)',
  'accent-800': 'hsl(0, 100%, 100%)',
  'accent-900': 'hsl(0, 100%, 100%)',
};

const neutralColors = {
  'neutral-50': 'hsl(0, 100%, 100%)',
  'neutral-100': 'hsl(0, 100%, 100%)',
  'neutral-200': 'hsl(0, 100%, 100%)',
  'neutral-300': 'hsl(0, 100%, 100%)',
  'neutral-400': 'hsl(0, 100%, 100%)',
  'neutral-500': 'hsl(0, 100%, 100%)',
  'neutral-600': 'hsl(0, 100%, 100%)',
  'neutral-700': 'hsl(0, 100%, 100%)',
  'neutral-800': 'hsl(0, 100%, 100%)',
  'neutral-900': 'hsl(0, 100%, 100%)',
};

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...primaryColors,
        ...accentColors,
        ...neutralColors,
        ...dangerColors,
        ...warningColors,
        ...successColors,
      },
      fontFamily: {},
      spacing: {},
    },
  },
  plugins: [],
};
