import React from 'react';
import { Switch } from '@mui/material';

interface ThemeSwitcherProps {
     isDarkMode: boolean;
     toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeSwitcherProps> = ({
     isDarkMode,
     toggleTheme,
}) => {
     return (
          <Switch
               checked={isDarkMode}
               onChange={toggleTheme}
               color="default"
               inputProps={{ 'aria-label': 'theme switch' }}
          />
     );
};

export default ThemeToggle;
