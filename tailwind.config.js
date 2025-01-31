/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./src/assets/bg.jpg')",
      },
      colors: {
        'custom-orange': '#F5269F',
        'custom-purple': '#B50EDF',
        'custom-red': '#EC434B',
        'custom-yellow': '#FD9C29',
        'custom-green': '#21C2F0',
        'custom-blue': '#57B3E4',
        'custom-black': '#24272A',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        'zoom-in-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5) translateY(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        'zoom-in-up': 'zoom-in-up 0.5s ease-out',
      },
      // Custom text-shadow
      textShadow: {
        custom: '1px 1px 2px #ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px 2px #ffffff',
        },
      })
    },
  ],
}
