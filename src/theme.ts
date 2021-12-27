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
    // Theme 1
    // primary: {
    //   main: '#e85a4f',
    // },
    // secondary: {
    //   main: '#e98074',
    // },
    // error: {
    //   main: '#8e8d8a',
    // },
    // warning: {
    //   main: '#d8c3a5',
    // },
    // info: {
    //   main: '#eae7dc',
    // },
    // success: {
    //   main: '#5a4fe8',
    // },
    // Theme 2
    primary: {
      main: '#d79922',
    },
    secondary: {
      main: '#efe2ba',
    },
    error: {
      main: '#4056a1',
    },
    warning: {
      main: '#f13c20',
    },
    info: {
      main: '#c5cbe3',
    },
    success: {
      main: '#efc8ba',
    },
    background: {
      default: '#d7d1bc',
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