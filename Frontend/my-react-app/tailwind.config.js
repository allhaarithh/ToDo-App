/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Adding a new color
        'custom-purple': '##a020f0',
        // Overriding an existing color
        'purple': {
          '50': '#ffe4d6',
          '100': '#facbea',
          '200': '#d988b9',
          '300': '#b0578d',
        },
      },
    },
  },
  plugins: [],
}
