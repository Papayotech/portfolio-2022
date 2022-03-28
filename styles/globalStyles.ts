import { createGlobalStyle } from 'styled-components';

interface theme {
  theme: {
    body: string;
    main: string;
    text: string;
    mainColor: string;
    accent: string;
    accentColor: string;
    secondary: string;
    secondaryColor: string;
    dullColor: string;
    ternary: string;
    codeColor: string;
  };
}

export const lightTheme = {
  body: '#fffff',
  main: '#5C14DB',
  mainColor: '#FFFFFF',
  accent: '#E5DE17',
  accentColor: '#161616',
  secondary: '#FFFFFF',
  secondaryColor: '#343434',
  dullColor: '#343434',
  ternary: '#000000',
  codeColor: '#D121C5',
};
export const darkTheme = {
  body: '#2E2F34',
  main: '#F3D00D',
  mainColor: '#F3D00D',
  accent: '#E5DE17',
  text: '#D9D8DD',
  accentColor: '#161616',
  secondary: '#FFFFFF',
  secondaryColor: '#FFFFFF',
  dullColor: '#343434',
  ternary: '#000000',
  codeColor: '#D121C5',
};

export const GlobalStyles = createGlobalStyle<theme>`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 32px 16px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: all 0.50s linear;
}
`;
