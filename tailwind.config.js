/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        muted: '#4B5563',
        paper: '#F9FAFB',
        accent: '#F3FF00',
        cream: '#FFFDF3',
        charcoal: '#29292C',
      },
    },
  },
  plugins: [],
}
