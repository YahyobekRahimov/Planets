/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            justWhite: "var(--white)",

            veryDarkBlue: "var(--very-dark-blue)",
            darkBlue: "var(--dark-blue)",
            justBlue: "var(--blue)",
            lightBlue: "var(--light-blue)",

            justGrey: "var(--grey)",

            justOrange: "var(--orange)",
            lightOrange: "var(--light-orange)",

            justRed: "var(--light-orange)",
            orangishRed: "var(--orangishRed)",

            justAqua: "var(--aqua)",
         },
         fontFamily: {
            spartan: "var(--spartan)",

            antonio: "var(--antonio)",
         },
      },
   },
   plugins: [],
};
