/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        tk: {
          bg: 'var(--tk-bg)',
          fg: 'var(--tk-fg)',
          card: 'var(--tk-card)',
          border: 'var(--tk-border)',
          primary: 'var(--tk-primary)',
          primary2: 'var(--tk-primary-2)',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        body: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(2, 6, 23, 0.08)',
        lift: '0 18px 55px rgba(2, 6, 23, 0.14)',
      },
    },
  },
  plugins: [],
};
