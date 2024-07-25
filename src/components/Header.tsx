import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

//Header component with app bar
const Header: React.FC = () => (
     <AppBar position="static" aria-label="store-header">
          <Toolbar>
               <Typography variant="h4">Jatin's Fabulous Store</Typography>
          </Toolbar>
     </AppBar>
);

export default Header;
