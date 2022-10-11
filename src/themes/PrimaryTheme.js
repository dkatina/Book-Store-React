import { createTheme } from "@mui/material/styles";

export const primaryTheme= {
  palette: {
    type: 'light',
    mode:'light',
    primary: {
      main: '#eada4a',
    },
    secondary: {
      main: '#6d4b00',
    },
    error: {
      main: '#f10505',
    },
    warning: {
      main: '#ff7700',
    },
    info: {
      main: '#9aff4b',
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