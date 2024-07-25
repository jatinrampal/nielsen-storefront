import React from 'react';
import {
     FormControl,
     TextField,
     MenuItem,
     IconButton,
     Box,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface DropdownProps {
     label: string;
     value: string;
     options: string[];
     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
     onClear: () => void;
     disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
     label,
     value,
     options,
     onChange,
     onClear,
     disabled,
}) => {
     return (
          <FormControl
               fullWidth
               variant="outlined"
               style={{ marginBottom: '20px' }}
          >
               <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                         select
                         label={label}
                         value={value}
                         onChange={onChange}
                         disabled={disabled}
                         fullWidth
                         InputLabelProps={{
                              shrink: true,
                         }}
                    >
                         {options.map((option) => (
                              <MenuItem key={option} value={option}>
                                   {option}
                              </MenuItem>
                         ))}
                    </TextField>
                    <Box
                         sx={{
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginLeft: '10px',
                              '&:hover': {
                                   backgroundColor: 'aliceblue', //Changing background on hover
                              },
                         }}
                    >
                         <IconButton
                              onClick={onClear}
                              disabled={disabled || !value} //Disabled if no category/product selected
                              sx={{ color: '#00695C' }}
                         >
                              <ClearIcon />
                         </IconButton>
                    </Box>
               </div>
          </FormControl>
     );
};

export default Dropdown;
