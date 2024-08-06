module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Bricolage Grotesque", "system-ui"],
      },
      // colors
      colors: {
        primary: "#FAF3E4",
        secondary: "#5D3A2B",
        accent: "#e64a4a",
        darkerPrimary: "#f0d7a3",
        dark: "#211410",
      },
    },
  },
  plugins: [],
};
