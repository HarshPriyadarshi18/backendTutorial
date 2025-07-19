/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",   // ✅ required for flowbite-react
    "./node_modules/flowbite/**/*.js",         // ✅ required for flowbite core
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),                // ✅ plugin required
  ],
}
