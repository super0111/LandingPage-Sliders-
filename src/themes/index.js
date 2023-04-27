import { createTheme } from '@mui/material/styles'

const createTypographySystem = () => {
  return {
    body1: {
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
    },
    button: {
      alignItems: 'center',
      display: 'flex',
      fontSize: 14,
      fontWeight: 700,
    },
    h1: {
      fontSize: 62,
      fontWeight: 700,
    },
    h2: {
      fontSize: '42px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '36px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
    },
  }
}

const createPaletteSystem = () => ({
  common: {
    black: '#000',
    white: '#FFFFFF',
  },
  primary: {
    dark: '#513F01 !important',
    light: '#CA9F02',
    main: '#FDD649 !important',
  },
  secondary: {
    main: '#3ffefd',
  },
  text: {
    disabled: '#596673',
    primary: '#090A0C',
    secondary: '#596673',
  },
})
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'black',
          },
          background: 'black !important',
          color: 'white',
          borderRadius: '0px !important',
        },
      },
      // variants: [
      //   {
      //     props: { variant: 'contained'},
      //     style: {
            
      //     },
      //   },
      //   {
      //     props: { variant: 'outlined'},
      //     style: {
      //       '&:hover': {
      //         color: 'white',
      //       },
      //     },
      //   },
      // ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'DM Sans',
          color: 'white'
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginLeft: '0px !important',
        },
      },
    },
  },
  palette: createPaletteSystem(),
  spacing: 4,
  typography: createTypographySystem(),
})

export default theme
export const palette = theme.palette
