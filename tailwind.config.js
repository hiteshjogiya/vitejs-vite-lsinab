module.exports = {
  content: ["./Tailwindcss/**/*.{html,js}",'../node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }

      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  }
  
}
