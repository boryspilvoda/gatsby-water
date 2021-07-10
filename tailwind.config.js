module.exports = {
  purge: {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [
      "from-blue-500",
      "to-blue-300",
      "from-green-500",
      "to-green-300",
      "from-purple-500",
      "to-purple-300",
      "bg-green-900",
      "bg-blue-900",
      "bg-purple-900",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
