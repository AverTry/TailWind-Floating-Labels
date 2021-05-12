module.exports = {
  purge: {
    enabled: true, // or true to purge unused css
    preserveHtmlElements: false,
    content: ['dist/*.html'], // files checked for purging
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}
