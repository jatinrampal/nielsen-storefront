import { createTheme } from '@mui/material/styles';

// Light Theme
const lightTheme = createTheme({
     palette: {
          mode: 'light',
          primary: {
               main: '#000000',
          },
          secondary: {
               main: '#B3E5FC',
          },
          background: { default: '#FFFFFF' },
     },
     components: {
          MuiAppBar: {
               styleOverrides: {
                    root: {
                         backgroundColor: '#E1F5FE',
                         '& .MuiTypography-root': {
                              color: '#0288D1',
                         },
                         height: '70px',
                    },
               },
          },
          MuiTextField: {
               styleOverrides: {
                    root: {
                         backgroundColor: 'aliceblue',
                    },
               },
          },
          MuiTypography: {
               styleOverrides: {
                    h6: {
                         color: '#616161',
                         fontWeight: 'bold',
                    },
                    h5: {
                         flexGrow: 1,
                         textAlign: 'center',
                         fontWeight: 'bold',
                    },
                    h4: {
                         flexGrow: 1,
                         textAlign: 'center',
                         fontWeight: 'bold',
                    },
                    body1: {
                         textAlign: 'left',
                         marginBottom: '8px',
                         textTransform: 'uppercase',
                    },
               },
          },
     },
     typography: {
          fontFamily: '"Avenir", "Helvetica", "Arial", sans-serif',
     },
});

// Dark Theme
const darkTheme = createTheme({
     palette: {
          mode: 'dark',
          primary: {
               main: '#FAEBD7',
          },
          secondary: {
               main: '#B3E5FC',
          },
          background: { default: 'black' },
     },
     components: {
          MuiAppBar: {
               styleOverrides: {
                    root: {
                         backgroundColor: '#333333',
                         '& .MuiTypography-root': {
                              color: '#FFFFFF',
                         },
                         height: '70px',
                    },
               },
          },
          MuiTextField: {
               styleOverrides: {
                    root: {
                         backgroundColor: '#424242',
                    },
               },
          },
          MuiTypography: {
               styleOverrides: {
                    h6: {
                         color: '#FFFFFF',
                         fontWeight: 'bold',
                    },
                    h5: {
                         flexGrow: 1,
                         textAlign: 'center',
                         fontWeight: 'bold',
                    },
                    h4: {
                         flexGrow: 1,
                         textAlign: 'center',
                         fontWeight: 'bold',
                    },
                    body1: {
                         textAlign: 'left',
                         marginBottom: '8px',
                         textTransform: 'uppercase',
                    },
               },
          },
     },
     typography: {
          fontFamily: '"Avenir", "Helvetica", "Arial", sans-serif',
     },
});

export { lightTheme, darkTheme };
