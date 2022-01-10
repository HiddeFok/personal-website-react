import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    props?: {
      AppBar?: {
        color?: string
      }
    }
  }
  interface PaletteOptions {
    type?: string;
  }
}


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#619196',
    },
    secondary: {
      main: '#84B4C8',
    },
    error: {
      main: '#C5998F',
    },
    warning: {
      main: '#DFC7C1',
    },
    info: {
      main: '#F4DCD6',
    },
    success: {
      main: '#B2D9EA',
    },
    background: {
      default: '#e6e6e6',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontSize: 12,
  },
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  props: {
    AppBar: {
      color: 'warning',
    },
  },
})


export default theme;