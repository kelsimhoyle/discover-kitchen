import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }


export const theme = {
    colors: {
      red: "#ff0000",
      lightRed: "#ff5a5f",
      lightBlue: "#a8dadc",
      blue: "#457b9d",
      darkBlue: "#1d3557",
      darkGrey: "#101010",
      lightGrey: "#88929c",
      mainBlue: "#4c748c"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1rem",
      medium: "1.25rem",
      large: "2rem"
    },
    device: {
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopL: `(min-width: ${size.desktop})`
    },
  }

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: '#1a202c';
    font-size: 18px;

  }
  body {
    position: relative;
    min-height: 100vh;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: white;

    color: ${theme.colors.darkGrey};
  }

`