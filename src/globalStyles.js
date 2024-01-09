import { createGlobalStyle, css, keyframes, styled } from 'styled-components';
import DotBG from './assets/svg/dots-bg.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    /* --color-hue: ${({ theme }) => theme.color}; */
    --color-hue: ${({ theme }) => theme?.color || themes.colors.red};
    --first-color: hsl(var(--color-hue), 75%, 60%);
    --first-color-opacity: hsla(var(--color-hue), 75%, 60%, 0.5);
    --text-color: hsl(252, 15%, 65%);
    --text-color-opacity: hsla(252, 15%, 65%,.5);
    --title-color: ${({ theme }) =>
      theme?.theme?.title || themes.themeColors.dim.title};
    --body-color: ${({ theme }) =>
      theme?.theme?.body || themes.themeColors.dim.body};
    --container-color: ${({ theme }) =>
      theme?.theme?.container || themes.themeColors.dim.container};

    /* Font and Typography */
    --logo-font: 'Moirai One', cursive;
    --body-font: 'Rubik', sans-serif;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;

    /* Font Weight */
    --font-thin: 100;
    --font-regular: 400;
    --font-bold: 700;

    /* Box Shadow */
    --shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);

    /* Border */
    --border-radius: 20px;
  }

  /* Responsive Typography */
  @media screen and (max-width: 992px) {
    :root {
      --h1-font-size: 1.75rem;
      --h2-font-size: 1.125rem;
      --h3-font-size: 1rem;
      --normal-font-size: 0.908rem;
      --small-font-size: 0.813rem;
    }
  }

  /* Base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--first-color) transparent;
  }

  *::-webkit-scrollbar {
    width: 0.25rem;
    box-sizing: border-box;
    padding-left: 0.125rem;
    background-color: transparent;
  }

  *:hover::-webkit-scrollbar {
    width: 0.25rem;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: var(--first-color);
  }
  
  html {
    scroll-behavior: smooth;
    font-size: ${({ theme }) => theme.size};
    transition: all 0.2s linear;
  }

  @media screen and (max-width: 767px) {
    width: 0;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-family: var(--body-font);
  }

  body {
    background: var(--body-color);
    color: var(--text-color);
    line-height: 1.7;
  }

  h1,
  h2,
  h3 {
    color: var(--title-color);
    font-weight: var(--font-bold);
    line-height: 1.2;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  /* Toast */
  .Toastify__toast-theme--dark {
  background: var(--body-color);
  color: var(--text-color);
}
`;

/* Theme */
export const themes = {
  colors: {
    purple: 252,
    yellow: 52,
    red: 352,
    green: 152,
    blue: 202,
  },
  sizes: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
  },
  themeColors: {
    dim: {
      body: 'hsl(252, 30%, 17%)',
      title: 'hsl(252, 30%, 95%)',
      container: 'hsl(252, 30%, 24%)',
    },
    dark: {
      body: 'hsl(252, 30%, 0%)',
      title: 'hsl(252, 30%, 95%)',
      container: 'hsl(0, 0%, 17%)',
    },
    light: {
      body: 'hsl(252, 30%, 92%)',
      title: 'hsl(252, 30%, 17%)',
      container: 'hsl(0, 0%, 92%)',
    },
  },
};

/* Reusable CSS Classes */
export const container = css`
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
`;

export const grid = css`
  display: grid;
`;

export const section = css`
  padding-top: 7rem;
  padding-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: var(--h1-font-size);
  margin-left: 0.875rem;
  font-weight: var(--font-bold);
  position: relative;
  margin-bottom: 3.75rem;

  &::before {
    content: '';
    background: url(${DotBG});
    height: 2.25rem;
    width: 2.25rem;
    position: absolute;
    left: -0.875rem;
    top: -0.875rem;
  }
`;

const ButtonPush = keyframes`
  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

export const button = css`
  padding: 0.75rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 9 9 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  background-color: var(--first-color);
  font-weight: var(--font-bold);

  &:hover {
    animation: ${ButtonPush} 0.3s linear 1;
  }
`;

export const Button = styled.a`
  ${button}
`;

// Form

export const FormDiv = styled.div`
  position: relative;
  margin-bottom: 1.875rem;
  height: 3.75rem;
`;

export const input = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  background-color: var(--container-color);
  color: var(--text-color);
  border: none;
  outline: none;
  border-radius: 1.875rem;
  padding: 0.625rem 1.875rem;
  z-index: 1;
`;

export const FormInput = styled.input`
  ${input}
`;
