import React from 'react';
import styled from 'styled-components';
import { Box, SelectChangeEvent } from '@mui/material';
import Dropdown from './Dropdown';

// Styled component
const StyledBox = styled(Box)`
     width: 250px;
`;

// Interface for SelectionCriteria props
interface SelectionCriteriaProps {
     categories: string[];
     selectedCategory: string;
     setSelectedCategory: (category: string) => void;
     products: string[];
     selectedProduct: string;
     setSelectedProduct: (product: string) => void;
}

const SelectionCriteria: React.FC<SelectionCriteriaProps> = ({
     categories,
     selectedCategory,
     setSelectedCategory,
     products,
     selectedProduct,
     setSelectedProduct,
}) => {
     const handleCategoryChange = (event: SelectChangeEvent<string>) => {
          setSelectedCategory(event.target.value as string);
          setSelectedProduct('');
     };

     const handleProductChange = (event: SelectChangeEvent<string>) => {
          setSelectedProduct(event.target.value as string);
     };

     return (
          <StyledBox>
               <Dropdown
                    label="Category"
                    value={selectedCategory}
                    options={categories}
                    onChange={handleCategoryChange}
                    onClear={() => {
                         setSelectedCategory('');
                         setSelectedProduct(''); // Clearing both the product and category
                    }}
               />
               <Dropdown
                    label="Product"
                    value={selectedProduct}
                    options={products}
                    onChange={handleProductChange}
                    disabled={!selectedCategory}
                    onClear={() => setSelectedProduct('')}
               />
          </StyledBox>
     );
};

export default SelectionCriteria;
