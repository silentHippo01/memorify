const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    defaultTheme: 'light',
    defaultExtendTheme: 'light',
    layout: {},
    themes: {
      light: {
        layout: {},
        colors: {
          primary: '#000',
          secondary: '#fff',
        },
      },
      dark: {
        layout: {},
        colors: {
          primary: '#ffffff',
          secondary: '#000000',
        },
      },
      extend: {
        colors: {
          white: "#FFFFFF",
          black: "#000000",
          blue: {
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
          },
          white: {
            100: "#FFFFFF",
          }
        },
      }
    }
  })]
}