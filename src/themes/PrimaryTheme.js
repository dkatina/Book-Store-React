import { createTheme } from "@mui/material/styles";

export const primaryTheme= {
  palette: {
    type: 'light',
    mode:'light',
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
      main: '#00B97F',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: ""
        }
      }
    }
  }
};

const theme=createTheme(primaryTheme);
export default theme