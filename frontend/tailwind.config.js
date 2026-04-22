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
          accent: 'var(--tk-accent)',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        body: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(2, 6, 23, 0.08)',
        lift: '0 18px 55px rgba(2, 6, 23, 0.14)',
        neon: '0 0 18px rgba(40, 116, 240, 0.22), 0 0 34px rgba(40, 116, 240, 0.14)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
};
