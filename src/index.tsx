import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

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
          <I18nextProvider i18n={i18n}>
               <Main />
          </I18nextProvider>
     </React.StrictMode>,
);

reportWebVitals();
