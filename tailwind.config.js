const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['packages/bee-q/**/*.{jsx,js,tsx,ts}'],
  theme: {
    borderRadius: {
      none: 'var(--bq-radius--none)',
      xs2: 'var(--bq-radius--xs2)',
      xs: 'var(--bq-radius--xs)',
      s: 'var(--bq-radius--s)',
      m: 'var(--bq-radius--m)',
      l: 'var(--bq-radius--l)',
      xl: 'var(--bq-radius--xl)',
      base: 'var(--bq-radius--m)',
      card: 'var(--bq-radius--l)',
      full: 'var(--bq-radius--xl)',
    },
    boxShadow: {
      xs: 'var(--bq-box-shadow--xs)',
      s: 'var(--bq-box-shadow--s)',
      m: 'var(--bq-box-shadow--m)',
      l: 'var(--bq-box-shadow--l)',
    },
    colors: {
      current: 'currentColor',
      focus: 'var(--bq-stroke--brand-focus)',
      transparent: 'transparent',
      /* -------------------------------------------------------------------------- */
      /*                         Default Theme (Declarative)                        */
      /* -------------------------------------------------------------------------- */
      bg: {
        primary: 'var(--bq-background--primary)',
        secondary: 'var(--bq-background--secondary)',
        tertiary: 'var(--bq-background--tertiary)',
        inverse: 'var(--bq-background--inverse)',
        brand: 'var(--bq-background--brand)',
      },
      text: {
        /** Primary */
        primary: 'var(--bq-text--primary)',
        'primary-hover': 'var(--bq-text--primary-hover)',
        'primary-active': 'var(--bq-text--primary-active)',
        'primary-disabled': 'var(--bq-text--primary-disabled)',
        /** Secondary */
        secondary: 'var(--bq-text--secondary)',
        'secondary-hover': 'var(--bq-text--secondary-hover)',
        'secondary-active': 'var(--bq-text--secondary-active)',
        'secondary-disabled': 'var(--bq-text--secondary-disabled)',
        'secondary-inverse': 'var(--bq-text--secondary-inverse)',
        /** Inverse */
        inverse: 'var(--bq-text--inverse)',
        /** Brand */
        brand: 'var(--bq-text--brand)',
        'brand-hover': 'var(--bq-text--brand-hover)',
        'brand-active': 'var(--bq-text--brand-active)',
        'brand-disabled': 'var(--bq-text--brand-disabled)',
        /** Feedback */
        success: 'var(--bq-text--success)',
        warning: 'var(--bq-text--warning)',
        danger: 'var(--bq-text--danger)',
      },
      icon: {
        /** Primary */
        primary: 'var(--bq-icon--primary)',
        'primary-hover': 'var(--bq-icon--primary-hover)',
        'primary-active': 'var(--bq-icon--primary-active)',
        'primary-disabled': 'var(--bq-icon--primary-disabled)',
        /** Secondary */
        secondary: 'var(--bq-icon--secondary)',
        'secondary-hover': 'var(--bq-icon--secondary-hover)',
        'secondary-active': 'var(--bq-icon--secondary-active)',
        'secondary-disabled': 'var(--bq-icon--secondary-disabled)',
        'secondary-inverse': 'var(--bq-icon--secondary-inverse)',
        /** Brand */
        brand: 'var(--bq-icon--brand)',
        'brand-hover': 'var(--bq-icon--brand-hover)',
        'brand-active': 'var(--bq-icon--brand-active)',
        'brand-disabled': 'var(--bq-icon--brand-disabled)',
        /** Feedback */
        success: 'var(--bq-icon--success)',
        warning: 'var(--bq-icon--warning)',
        danger: 'var(--bq-icon--danger)',
      },
      ui: {
        /** Primary */
        primary: 'var(--bq-ui--primary)',
        'primary-hover': 'var(--bq-ui--primary-hover)',
        'primary-active': 'var(--bq-ui--primary-active)',
        'primary-disabled': 'var(--bq-ui--primary-disabled)',
        /** Secondary */
        secondary: 'var(--bq-ui--secondary)',
        'secondary-hover': 'var(--bq-ui--secondary-hover)',
        'secondary-active': 'var(--bq-ui--secondary-active)',
        'secondary-disabled': 'var(--bq-ui--secondary-disabled)',
        'secondary-light': 'var(--bq-ui--secondary-light)',
        /** Tiertary */
        tiertary: 'var(--bq-ui--tiertary)',
        'tiertary-hover': 'var(--bq-ui--tiertary-hover)',
        'tiertary-active': 'var(--bq-ui--tiertary-active)',
        'tiertary-disabled': 'var(--bq-ui--tiertary-disabled)',
        /** Inverse */
        inverse: 'var(--bq-ui--inverse)',
        'inverse-hover': 'var(--bq-ui--inverse-hover)',
        'inverse-active': 'var(--bq-ui--inverse-active)',
        'inverse-disabled': 'var(--bq-ui--inverse-disabled)',
        /** Brand */
        brand: 'var(--bq-ui--brand)',
        'brand-hover': 'var(--bq-ui--brand-hover)',
        'brand-active': 'var(--bq-ui--brand-active)',
        'brand-disabled': 'var(--bq-ui--brand-disabled)',
        'brand-light': 'var(--bq-ui--brand-light)',
        /** Success */
        success: 'var(--bq-ui--success)',
        'success-hover': 'var(--bq-ui--success-hover)',
        'success-active': 'var(--bq-ui--success-active)',
        'success-disabled': 'var(--bq-ui--success-disabled)',
        'success-light': 'var(--bq-ui--success-light)',
        /** Warning */
        warning: 'var(--bq-ui--warning)',
        'warning-hover': 'var(--bq-ui--warning-hover)',
        'warning-active': 'var(--bq-ui--warning-active)',
        'warning-disabled': 'var(--bq-ui--warning-disabled)',
        'warning-light': 'var(--bq-ui--warning-light)',
        /** Danger */
        danger: 'var(--bq-ui--danger)',
        'danger-hover': 'var(--bq-ui--danger-hover)',
        'danger-active': 'var(--bq-ui--danger-active)',
        'danger-disabled': 'var(--bq-ui--danger-disabled)',
        'danger-light': 'var(--bq-ui--danger-light)',
      },
      stroke: {
        /** Primary */
        primary: 'var(--bq-stroke--primary)',
        'primary-hover': 'var(--bq-stroke--primary-hover)',
        'primary-active': 'var(--bq-stroke--primary-active)',
        'primary-disabled': 'var(--bq-stroke--primary-disabled)',
        /** Secondary */
        secondary: 'var(--bq-stroke--secondary)',
        'secondary-hover': 'var(--bq-stroke--secondary-hover)',
        'secondary-active': 'var(--bq-stroke--secondary-active)',
        'secondary-disabled': 'var(--bq-stroke--secondary-disabled)',
        'secondary-light': 'var(--bq-stroke--secondary-light)',
        /** Tiertary */
        tiertary: 'var(--bq-stroke--tiertary)',
        'tiertary-hover': 'var(--bq-stroke--tiertary-hover)',
        'tiertary-active': 'var(--bq-stroke--tiertary-active)',
        'tiertary-disabled': 'var(--bq-stroke--tiertary-disabled)',
        /** Inverse */
        inverse: 'var(--bq-stroke--inverse)',
        /** Brand */
        brand: 'var(--bq-stroke--brand)',
        'brand-hover': 'var(--bq-stroke--brand-hover)',
        'brand-active': 'var(--bq-stroke--brand-active)',
        'brand-disabled': 'var(--bq-stroke--brand-disabled)',
        /** Success */
        success: 'var(--bq-stroke--success)',
        'success-hover': 'var(--bq-stroke--success-hover)',
        'success-active': 'var(--bq-stroke--success-active)',
        'success-disabled': 'var(--bq-stroke--success-disabled)',
        /** Warning */
        warning: 'var(--bq-stroke--warning)',
        'warning-hover': 'var(--bq-stroke--warning-hover)',
        'warning-active': 'var(--bq-stroke--warning-active)',
        'warning-disabled': 'var(--bq-stroke--warning-disabled)',
        /** Danger */
        danger: 'var(--bq-stroke--danger)',
        'danger-hover': 'var(--bq-stroke--danger-hover)',
        'danger-active': 'var(--bq-stroke--danger-active)',
        'danger-disabled': 'var(--bq-stroke--danger-disabled)',
      },
      /* -------------------------------------------------------------------------- */
      /*                         Extended colors (Primitive)                        */
      /* -------------------------------------------------------------------------- */
      blue: {
        100: 'var(--bq-blue-100)',
        200: 'var(--bq-blue-200)',
        300: 'var(--bq-blue-300)',
        400: 'var(--bq-blue-400)',
        500: 'var(--bq-blue-500)',
        600: 'var(--bq-blue-600)',
        700: 'var(--bq-blue-700)',
        800: 'var(--bq-blue-800)',
        900: 'var(--bq-blue-900)',
        1000: 'var(--bq-blue-1000)',
      },
      corai: {
        100: 'var(--bq-corai-100)',
        200: 'var(--bq-corai-200)',
        300: 'var(--bq-corai-300)',
        400: 'var(--bq-corai-400)',
        500: 'var(--bq-corai-500)',
        600: 'var(--bq-corai-600)',
        700: 'var(--bq-corai-700)',
        800: 'var(--bq-corai-800)',
        900: 'var(--bq-corai-900)',
        1000: 'var(--bq-corai-1000)',
      },
      cyan: {
        100: 'var(--bq-cyan-100)',
        200: 'var(--bq-cyan-200)',
        300: 'var(--bq-cyan-300)',
        400: 'var(--bq-cyan-400)',
        500: 'var(--bq-cyan-500)',
        600: 'var(--bq-cyan-600)',
        700: 'var(--bq-cyan-700)',
        800: 'var(--bq-cyan-800)',
        900: 'var(--bq-cyan-900)',
        1000: 'var(--bq-cyan-1000)',
      },
      gold: {
        100: 'var(--bq-gold-100)',
        200: 'var(--bq-gold-200)',
        300: 'var(--bq-gold-300)',
        400: 'var(--bq-gold-400)',
        500: 'var(--bq-gold-500)',
        600: 'var(--bq-gold-600)',
        700: 'var(--bq-gold-700)',
        800: 'var(--bq-gold-800)',
        900: 'var(--bq-gold-900)',
        1000: 'var(--bq-gold-1000)',
      },
      green: {
        100: 'var(--bq-green-100)',
        200: 'var(--bq-green-200)',
        300: 'var(--bq-green-300)',
        400: 'var(--bq-green-400)',
        500: 'var(--bq-green-500)',
        600: 'var(--bq-green-600)',
        700: 'var(--bq-green-700)',
        800: 'var(--bq-green-800)',
        900: 'var(--bq-green-900)',
        1000: 'var(--bq-green-1000)',
      },
      grey: {
        50: 'var(--bq-neutral-50)',
        100: 'var(--bq-neutral-100)',
        200: 'var(--bq-neutral-200)',
        300: 'var(--bq-neutral-300)',
        400: 'var(--bq-neutral-400)',
        500: 'var(--bq-neutral-500)',
        600: 'var(--bq-neutral-600)',
        700: 'var(--bq-neutral-700)',
        800: 'var(--bq-neutral-800)',
        900: 'var(--bq-neutral-900)',
      },
      indigo: {
        100: 'var(--bq-indigo-100)',
        200: 'var(--bq-indigo-200)',
        300: 'var(--bq-indigo-300)',
        400: 'var(--bq-indigo-400)',
        500: 'var(--bq-indigo-500)',
        600: 'var(--bq-indigo-600)',
        700: 'var(--bq-indigo-700)',
        800: 'var(--bq-indigo-800)',
        900: 'var(--bq-indigo-900)',
        1000: 'var(--bq-indigo-1000)',
      },
      lime: {
        100: 'var(--bq-lime-100)',
        200: 'var(--bq-lime-200)',
        300: 'var(--bq-lime-300)',
        400: 'var(--bq-lime-400)',
        500: 'var(--bq-lime-500)',
        600: 'var(--bq-lime-600)',
        700: 'var(--bq-lime-700)',
        800: 'var(--bq-lime-800)',
        900: 'var(--bq-lime-900)',
        1000: 'var(--bq-lime-1000)',
      },
      magenta: {
        100: 'var(--bq-magenta-100)',
        200: 'var(--bq-magenta-200)',
        300: 'var(--bq-magenta-300)',
        400: 'var(--bq-magenta-400)',
        500: 'var(--bq-magenta-500)',
        600: 'var(--bq-magenta-600)',
        700: 'var(--bq-magenta-700)',
        800: 'var(--bq-magenta-800)',
        900: 'var(--bq-magenta-900)',
        1000: 'var(--bq-magenta-1000)',
      },
      neutral: {
        white: 'var(--bq-neutral-white)',
        black: 'var(--bq-neutral-black)',
      },
      orange: {
        100: 'var(--bq-orange-100)',
        200: 'var(--bq-orange-200)',
        300: 'var(--bq-orange-300)',
        400: 'var(--bq-orange-400)',
        500: 'var(--bq-orange-500)',
        600: 'var(--bq-orange-600)',
        700: 'var(--bq-orange-700)',
        800: 'var(--bq-orange-800)',
        900: 'var(--bq-orange-900)',
        1000: 'var(--bq-orange-1000)',
      },
      purple: {
        100: 'var(--bq-purple-100)',
        200: 'var(--bq-purple-200)',
        300: 'var(--bq-purple-300)',
        400: 'var(--bq-purple-400)',
        500: 'var(--bq-purple-500)',
        600: 'var(--bq-purple-600)',
        700: 'var(--bq-purple-700)',
        800: 'var(--bq-purple-800)',
        900: 'var(--bq-purple-900)',
        1000: 'var(--bq-purple-1000)',
      },
      red: {
        100: 'var(--bq-red-100)',
        200: 'var(--bq-red-200)',
        300: 'var(--bq-red-300)',
        400: 'var(--bq-red-400)',
        500: 'var(--bq-red-500)',
        600: 'var(--bq-red-600)',
        700: 'var(--bq-red-700)',
        800: 'var(--bq-red-800)',
        900: 'var(--bq-red-900)',
        1000: 'var(--bq-red-1000)',
      },
      sky: {
        100: 'var(--bq-sky-100)',
        200: 'var(--bq-sky-200)',
        300: 'var(--bq-sky-300)',
        400: 'var(--bq-sky-400)',
        500: 'var(--bq-sky-500)',
        600: 'var(--bq-sky-600)',
        700: 'var(--bq-sky-700)',
        800: 'var(--bq-sky-800)',
        900: 'var(--bq-sky-900)',
        1000: 'var(--bq-sky-1000)',
      },
      teal: {
        100: 'var(--bq-teal-100)',
        200: 'var(--bq-teal-200)',
        300: 'var(--bq-teal-300)',
        400: 'var(--bq-teal-400)',
        500: 'var(--bq-teal-500)',
        600: 'var(--bq-teal-600)',
        700: 'var(--bq-teal-700)',
        800: 'var(--bq-teal-800)',
        900: 'var(--bq-teal-900)',
        1000: 'var(--bq-teal-1000)',
      },
      volcano: {
        100: 'var(--bq-volcano-100)',
        200: 'var(--bq-volcano-200)',
        300: 'var(--bq-volcano-300)',
        400: 'var(--bq-volcano-400)',
        500: 'var(--bq-volcano-500)',
        600: 'var(--bq-volcano-600)',
        700: 'var(--bq-volcano-700)',
        800: 'var(--bq-volcano-800)',
        900: 'var(--bq-volcano-900)',
        1000: 'var(--bq-volcano-1000)',
      },
      yellow: {
        100: 'var(--bq-yellow-100)',
        200: 'var(--bq-yellow-200)',
        300: 'var(--bq-yellow-300)',
        400: 'var(--bq-yellow-400)',
        500: 'var(--bq-yellow-500)',
        600: 'var(--bq-yellow-600)',
        700: 'var(--bq-yellow-700)',
        800: 'var(--bq-yellow-800)',
        900: 'var(--bq-yellow-900)',
        1000: 'var(--bq-yellow-1000)',
      },
    },
    fontFamily: {
      outfit: 'var(--bq-font-family--outfit)',
    },
    fontSize: {
      xs: 'var(--bq-font-size--xs)',
      s: 'var(--bq-font-size--s)',
      m: 'var(--bq-font-size--m)',
      l: 'var(--bq-font-size--l)',
      xl: 'var(--bq-font-size--xl)',
      xxl: 'var(--bq-font-size--xxl)',
      xxl2: 'var(--bq-font-size--xxl2)',
      xxl3: 'var(--bq-font-size--xxl3)',
      xxl4: 'var(--bq-font-size--xxl4)',
      xxl5: 'var(--bq-font-size--xxl5)',
    },
    fontWeight: {
      thin: 'var(--bq-font-weight--thin)',
      light: 'var(--bq-font-weight--light)',
      regular: 'var(--bq-font-weight--regular)',
      medium: 'var(--bq-font-weight--medium)',
      semibold: 'var(--bq-font-weight--semibold)',
      bold: 'var(--bq-font-weight--bold)',
    },
    lineHeight: {
      regular: 'var(--bq-font-line-height--regular)',
      large: 'var(--bq-font-line-height--large)',
    },
    extend: {
      content: {
        empty: "''",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        /**
         * Common `FOCUS` state that should be used within `focus-visible` Tailwind CSS utility
         * Examples of usage:
         *
         *  class="focus-visible:focus"
         *
         *  @apply focus-visible:focus
         *
         *  &:focus-visible {
         *    @apply focus;
         *  }
         */
        '.focus': {
          '--tw-ring-width': '2px',
          '--tw-ring-offset-width': '1px',
          '--tw-ring-color': theme('colors.focus'),
          outline: `var(--tw-ring-width) solid ${theme('colors.focus')}`,
          outlineOffset: 'var(--tw-ring-offset-width)',
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
