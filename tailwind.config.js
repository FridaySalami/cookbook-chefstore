/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark, #9A0C24)',
          accent: 'var(--color-accent)',
          background: 'var(--color-background)',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...other plugins
    ]
}