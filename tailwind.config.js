module.exports = {
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F07C00",
          light: "",
        },
        accent: {
          DEFAULT: "#24346D",
          light: "#5C5487",
        },
        secondary: {
          DEFAULT: "#F8F7FC",
          light: "",
        },
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggle2: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        bounce2: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(15%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bounce3: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(15%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        'before-animation': {
          '0%': {
            width: 'var(--tw-thickness)',
            boxShadow: 'var(--tw-lat) (-var(--tw-offset)) var(--tw-color-1), (-var(--tw-lat)) var(--tw-offset) var(--tw-color-3)',
          },
          '35%': {
            width: 'var(--tw-size)',
            boxShadow: '0 (-var(--tw-offset)) var(--tw-color-1), 0 var(--tw-offset) var(--tw-color-3)',
          },
          '70%': {
            width: 'var(--tw-thickness)',
            boxShadow: '(-var(--tw-lat)) (-var(--tw-offset)) var(--tw-color-1), var(--tw-lat) var(--tw-offset) var(--tw-color-3)',
          },
          '100%': {
            boxShadow: 'var(--tw-lat) (-var(--tw-offset)) var(--tw-color-1), (-var(--tw-lat)) var(--tw-offset) var(--tw-color-3)',
          },
        },
        'after-animation': {
          '0%': {
            height: 'var(--tw-thickness)',
            boxShadow: 'var(--tw-offset) var(--tw-lat) var(--tw-color-2), (-var(--tw-offset)) (-var(--tw-lat)) var(--tw-color-4)',
          },
          '35%': {
            height: 'var(--tw-size)',
            boxShadow: 'var(--tw-offset) 0 var(--tw-color-2), (-var(--tw-offset)) 0 var(--tw-color-4)',
          },
          '70%': {
            height: 'var(--tw-thickness)',
            boxShadow: 'var(--tw-offset) (-var(--tw-lat)) var(--tw-color-2), (-var(--tw-offset)) var(--tw-lat) var(--tw-color-4)',
          },
          '100%': {
            boxShadow: 'var(--tw-offset) var(--tw-lat) var(--tw-color-2), (-var(--tw-offset)) (-var(--tw-lat)) var(--tw-color-4)',
          },
        },
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-450px))' },
        },
        
      },
      animation: {
        "fade-out-down": "fade-out-down 0.5s ease-out ",
        // transform transition duration-300 translate-y-20 opacity-0 ease-out
        wiggle: "wiggle 1s ease-in-out infinite",
        bounce2: "bounce2 3s infinite",
        bounce3: "bounce2 5s infinite",
        wiggle2: "wiggle2 7s ease-in-out infinite",
        'before-animation': 'before-animation 2s infinite',
        'after-animation': 'after-animation 2s infinite',
        "scroll-y": 'scrollY 30s linear infinite',

      },
    },
    screens: {
      xxl: { max: "3000px" },
      "2xl": { max: "1540px" },
      "3xl": { min: "1540px" },
      "min-1200": { max: "1200px" },

      // => @media (max-width: 1535px) { ... }

      "1xl": { max: "1200px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
