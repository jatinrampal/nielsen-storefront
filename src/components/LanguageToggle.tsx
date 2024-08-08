import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LanguageToggleProps {
     changeLanguage: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ changeLanguage }) => {
     const { i18n } = useTranslation();
     const [language, setLanguage] = useState(i18n.language || 'en');

     useEffect(() => {
          setLanguage(i18n.language);
     }, [i18n.language]);

     const handleLanguageChange = (
          event: React.MouseEvent<HTMLElement>,
          newLanguage: string | null,
     ) => {
          if (newLanguage !== null) {
               setLanguage(newLanguage);
               changeLanguage(newLanguage);
          }
     };

     return (
          <ToggleButtonGroup
               value={language}
               exclusive
               onChange={handleLanguageChange}
               aria-label="language selection"
          >
               <ToggleButton value="en" aria-label="English">
                    EN
               </ToggleButton>
               <ToggleButton value="fr" aria-label="French">
                    FR
               </ToggleButton>
               <ToggleButton value="es" aria-label="Spanish">
                    ES
               </ToggleButton>
          </ToggleButtonGroup>
     );
};

export default LanguageToggle;
