import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface HeaderProps {
     toggleTheme: () => void;
     isDarkMode: boolean;
}

// Header component with app bar
const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => (
     <AppBar position="static" aria-label="store-header">
          <Toolbar>
               <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    Jatin's Fabulous Store
               </Typography>
               <Switch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    color="default"
                    inputProps={{ 'aria-label': 'theme switch' }}
               />
          </Toolbar>
     </AppBar>
);

export default Header;
