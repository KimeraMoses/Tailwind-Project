module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      logo: "140px",
      sideBar: "220px",
      largeSideBar: "360px",
    },
    maxWidth: {
      1140: "1140px",
      960: "960px",
      720: "720px",
      540: "540px",
      256: "256px",
    },
    backgroundImage: {
      header: "url('src/assets/bkgrd-reception.png')",
      authFlow: "url('src/assets/bkgrd-authflow.jpeg')",
    },
    colors: {
      background: "#EDF1FF",
      black: "rgb(0,0,0)",
      transparent: "rgba(0,0,0,0.2)",
      current: "currentColor",
      accent: "#F26E50",
      accentHover: "rgba(242, 110, 80, 0.85)",
      primary: "#225987",
      white: "#FFFFFF",
      whitePrimary: "rgba(255, 255, 255, 0.3)",
      gray: "#E5E5E5",
      red: "#FF0000",
      grayPrimary: "#6C757D",
      grayAccent: "rgba(108,117,125,0.6)",
      borderColor: "rgba(95, 94, 94, 0.336)",
    },
    fontFamily: {
      sans: ["system-ui", "-apple-system", "Roboto", '"Helvetica Neue"'],
      body: ["Montserrat", "Arial"],
      Poppins: ["Poppins, sans-serif"],
    },
    extend: {
      height: {
        128: "28rem",
        136: "36rem",

        primaryNavBar: "var(--primary-nav-bar-height)",
        secondaryNavBar: "var(--secondary-nav-bar-height)",
        sideBarHeight: "var(--side-bar-height)",
      },
      width: {
        256: "256px",
        128: "28rem",
        132: "32rem",
        142: "42rem",
        450: "450px",
        medium: "750px",
        large: "1000px",
        extra: "1280px",
      },
      padding: {
        primaryNavBar: "var(--primary-nav-bar-height)",
        secondaryNavBar: "var(--secondary-nav-bar-height)",
      },
      inset: {
        primaryNavBar: "var(--primary-nav-bar-height)",
        navbarsOffset: "var(--navbars-offset)",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      hover: ["disabled"],
    },
  },
  plugins: [],
};
