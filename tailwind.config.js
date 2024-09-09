/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-polygon': 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 0 99%, 0% 70%, 0% 35%, 20% 10%)',
      },
      screens: {
        "xsm" : "300px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-polygon': {
          'clip-path': 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 0 99%, 0% 70%, 0% 35%, 20% 10%)',
        },
      });
    },

    function ({ addUtilities }) {
      addUtilities({
        '.mask-curved': {
          'mask-image': 'radial-gradient(circle at top, transparent 20%, white )',
        },
      });
    },
  ],
};
