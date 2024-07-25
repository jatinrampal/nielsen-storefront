import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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

export default theme;
