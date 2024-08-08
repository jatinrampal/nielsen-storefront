import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CategoryOverview from './CategoryOverview';
import Details from '../Product/Details';

// Props interface for DataOverview
interface DataOverviewProps {
     selectedCategory: string;
     selectedProduct: string;
}

const DataOverview: React.FC<DataOverviewProps> = ({
     selectedCategory,
     selectedProduct,
}) => {
     const { t } = useTranslation();

     return (
          <Box sx={{ flex: 1, textAlign: 'center' }}>
               {/* Rendering components based on user selection */}
               {selectedCategory && selectedProduct ? (
                    <Details
                         selectedCategory={selectedCategory}
                         selectedProduct={selectedProduct}
                    />
               ) : selectedCategory ? (
                    <CategoryOverview selectedCategory={selectedCategory} />
               ) : (
                    <Typography variant="h6">
                         {t('pleaseSelectCategory')}
                    </Typography>
               )}
          </Box>
     );
};

export default DataOverview;
