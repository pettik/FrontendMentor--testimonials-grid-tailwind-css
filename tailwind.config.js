module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
    extend: {
      colors: {
        page: 'hsl(210 46% 95%)',
        violet: 'hsl(263 55% 52%)',
        lavender: '#a775f1',
        'slate-blue': 'hsl(217 19% 35%)',
        midnight: 'hsl(219 29% 14%)',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
      maxWidth: {
        testimonials: '69.375rem',
      },
      boxShadow: {
        testimonial: '2.5rem 3.75rem 3.125rem -2.9375rem hsl(217 19% 35% / 0.25)',
      },
    },
  },
  plugins: [],
};
