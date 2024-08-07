import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme'; // Import both themes

const root = ReactDOM.createRoot(
     document.getElementById('root') as HTMLElement,
);

const Main: React.FC = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleTheme = () => {
          setIsDarkMode(!isDarkMode);
     };

     return (
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
               <CssBaseline />
               <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          </ThemeProvider>
     );
};

root.render(
     <React.StrictMode>
          <Main />
     </React.StrictMode>
);

reportWebVitals();
