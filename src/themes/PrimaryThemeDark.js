import { createTheme } from "@mui/material/styles";

export const primaryThemeDark= {
  palette: {
    type: 'dark',
    mode:'dark',
    primary: {
      main: '#F3DE8A',
    },
    secondary: {
      main: '#D11149',
    },
    error: {
      main: '#f10505',
    },
    warning: {
      main: '#F17105',
    },
    info: {
      main: '#4E937A',
    },
  },
};

const theme=createTheme(primaryThemeDark);
export default theme