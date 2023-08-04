/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDEE6D",
        blackish: "#171717",
        greey: "#F5F4FF",
        purp: "#A19EF7",
        darkBlue: "#2C3439",
        blak: "#000000",
        grey: "#CED9BF",
        lightGray: "rgba(44, 52, 57, 0.48)",
        lightBlack:"rgba(44, 52, 57, 0.61)",
        red:"hsla(354, 74%, 47%, 1)",
        blur:"rgba(23, 23, 23, 0.53)",
        blue:"#A0C6E8",
      },
      fontFamily: {
        custom: ['Caprasimo', 'sans-serif'],
        montserrat: "Montserrat",
      },

      boxShadow: {
        custom: '-2px -1px 16px -1px rgba(91,84,84,0.75)',
        purp:'-5px 5px 0 hsl(242.022, 85%, 79%) ',
        red:'-5px 5px 0 hsla(354, 74%, 47%, 1)',
        yellow:'-5px 5px 0 hsl(54,97,71)',
        shdInset : 'inset 0 -4px 0 rgba(253, 238, 109, 1)',
        shdInsetPurp : 'inset 0 -4px 0 hsl(242.022, 85%, 79%)',
       
      },
      keyframes: {

        slide: {

          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-100%)' },

        },

      },animation: {

        'slide-infinite': 'slide 25s infinite linear',

      },
      
    },
  },
  
  plugins: [],
};
