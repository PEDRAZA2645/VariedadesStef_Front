/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    fontFamily: {
      custom: ["Victor Mono", "monospace"], // Type
    },
    fontStyle:{
      custom: "italic",
    },
    container: {
      center: true,
    },
    extend: { 
     
      colors: {
        primary: "#000000",
        secondary: "#F2F2F2",
        tertiary: "#f4c4bd",
        fourth: "#FEE092",
        fifth: "#772035",
        sixth: "#E5D9AF",
        seventh: "#5C4033",
      },     
    },
    screens: {
      sm: '375px',
      md: '768px',
      //lg: '960px', esta la podria necesitar mas adelante
      lg: '1440px',
      xl: '1669px'
     
    },
  },
  plugins: [],
}