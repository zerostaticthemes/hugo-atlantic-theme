module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
       colors: {
         brown: {
           50: '#CCC'
         }
       }
    }
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}