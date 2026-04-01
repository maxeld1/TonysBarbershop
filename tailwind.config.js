/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f8f5ef',
          100: '#ede5d6',
          200: '#dac9a8',
          300: '#c6ac78',
          400: '#b58c4f',
          500: '#9a6f37',
          600: '#7b562b',
          700: '#5d3f1f',
          800: '#35251a',
          900: '#1d1715',
          950: '#11100f',
        },
        accent: {
          100: '#fef3c7',
          300: '#fcd34d',
          500: '#f59e0b',
          700: '#b45309',
        },
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.12), transparent 0 32%), radial-gradient(circle at 80% 0%, rgba(198, 172, 120, 0.16), transparent 0 25%), linear-gradient(180deg, rgba(17, 16, 15, 0.98), rgba(17, 16, 15, 1))',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
