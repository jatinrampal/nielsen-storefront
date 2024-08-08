import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
     toggleTheme: () => void;
     isDarkMode: boolean;
     changeLanguage: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({
                                            toggleTheme,
                                            isDarkMode,
                                            changeLanguage,
                                       }) => {
     const { t } = useTranslation();

     return (
          <AppBar position="static" aria-label="store-header">
               <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                         <LanguageToggle changeLanguage={changeLanguage} />
                    </Box>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                         {t('storeTitle')}
                    </Typography>
                    <ThemeToggle
                         isDarkMode={isDarkMode}
                         toggleTheme={toggleTheme}
                    />
               </Toolbar>
          </AppBar>
     );
};

export default Header;
