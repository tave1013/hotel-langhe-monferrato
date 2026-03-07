/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts}', './components/**/*.{js,ts}'],
  theme: {
    extend: {
      keyframes: {
        kenBurns: { from: { transform: 'scale(1)' }, to: { transform: 'scale(1.06)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'ken-burns': 'kenBurns 10s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
