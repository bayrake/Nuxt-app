/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './composables/**/*.{ts,js}',
    './plugins/**/*.{ts,js}',
    './nuxt.config.{ts,js}',
    './stores/**/*.{ts,js}',
    './tests/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
