/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F0F0E',
        ivory: '#F6F1E7',
        walnut: '#6B4423',
        walnutDark: '#4A2E17',
        graphite: '#3A3A3A',
        gold: '#B8935A',
        goldSoft: '#D4B483',
        marble: '#FBFAF6',
        slate: '#2A2D34',
        parchment: '#EFE8D8'
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif']
      },
      fontSize: {
        base: ['17px', '1.7']
      },
      boxShadow: {
        editorial: '0 1px 3px rgba(15,15,14,0.06), 0 8px 24px rgba(15,15,14,0.04)',
        card: '0 2px 8px rgba(15,15,14,0.05)',
        gold: '0 0 0 1px rgba(184,147,90,0.35)'
      },
      backgroundImage: {
        'chessboard': "linear-gradient(45deg, rgba(15,15,14,0.04) 25%, transparent 25%, transparent 75%, rgba(15,15,14,0.04) 75%), linear-gradient(45deg, rgba(15,15,14,0.04) 25%, transparent 25%, transparent 75%, rgba(15,15,14,0.04) 75%)",
        'noise': "radial-gradient(circle at 1px 1px, rgba(15,15,14,0.06) 1px, transparent 0)"
      },
      backgroundSize: {
        'chessboard': '40px 40px',
        'noise': '18px 18px'
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px'
      },
      maxWidth: {
        'reading': '68ch'
      }
    }
  },
  plugins: []
}
