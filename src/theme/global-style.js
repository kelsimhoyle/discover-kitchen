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
      red: "#c81d25",
      lightRed: "#ff5a5f",
      lightBlue: "#a8dadc",
      blue: "#457b9d",
      darkBlue: "#1d3557"
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
    font-family: 'Open Sans', sans-serif, Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: '#1a202c';
  }
  body {
    position: relative;
    min-height: 100vh;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
    color: #f8f8ff;
  }

  h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2 {
    font-size: ${theme.fontSizes.large};
    letter-spacing: .5rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 {
    display: inline;
    font-size: 1.75rem;
    letter-spacing: .25rem;
    padding: .25rem;
    background: linear-gradient(180deg, rgba(200,29,37, 0) 0%, rgba(200,29,37, 0) 50%, rgba(200, 29, 37, 1) 50%, rgba(200,29,37, 1) 100%);
  }

   h3 {
      font-size: ${theme.fontSizes.medium};
  }
`