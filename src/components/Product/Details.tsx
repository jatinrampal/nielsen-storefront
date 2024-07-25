import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import { Typography, Box, CircularProgress } from '@mui/material';

// Interface for receiving props
interface ProductOverviewProps {
     selectedCategory: string;
     selectedProduct: string;
}

// Interface for specific Product
interface Product {
     id: number;
     title: string;
     price: number;
     image: string;
     description: string;
     category: string;
     rating?: {
          rate: number;
          count: number;
     };
}

// Styled components
const Container = styled(Box)`
     padding: 20px;
     text-align: left;
`;

const ImageContainer = styled(Box)`
     width: 500%;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const InfoContainer = styled(Box)`
     width: 20%;
     display: flex;
     flex-direction: column;
     margin-right: 20px;
`;

const StyledImg = styled.img`
     max-width: 200px;
     max-height: 200px;
`;

const Details: React.FC<ProductOverviewProps> = ({
     selectedCategory,
     selectedProduct,
}) => {
     // State for product details
     const [product, setProduct] = useState<Product | null>(null);

     // Fetching product data
     const { data, loading, error } = useFetch(
          `https://fakestoreapi.com/products`,
     );

     useEffect(() => {
          if (data) {
               // Filtering data to find the selected product
               const filteredProduct = data.find(
                    (product: Product) =>
                         product.title === selectedProduct &&
                         product.category === selectedCategory,
               );
               setProduct(filteredProduct || null);
          }
     }, [data, selectedCategory, selectedProduct]);

     // Loading Spinner
     if (loading) {
          return (
               <CircularProgress
                    sx={{ display: 'block', margin: '20px auto' }}
               />
          );
     }

     // Error and No data case handling
     if (error) {
          return (
               <Typography variant="body1" align="center">
                    Failed to load product data
               </Typography>
          );
     }

     if (!product) {
          return (
               <Typography variant="body1" align="center">
                    Product not found
               </Typography>
          );
     }

     // Product Details
     return (
          <Container>
               <Typography variant="h5" gutterBottom>
                    {product.title}
               </Typography>
               <Box
                    sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                    }}
               >
                    <InfoContainer>
                         <Typography variant="body1">
                              {product.category}
                         </Typography>
                         <Typography variant="body1">
                              <strong>SKU:</strong> {product.id}
                         </Typography>
                         <Typography
                              variant="h4"
                              sx={{ fontWeight: 'bold', textAlign: 'left' }}
                         >
                              ${product.price}
                         </Typography>
                    </InfoContainer>
                    <ImageContainer>
                         <StyledImg
                              src={
                                   product.image ||
                                   'https://via.placeholder.com/200'
                              }
                              alt={product.title || 'Product Image'}
                         />
                    </ImageContainer>
               </Box>
               <Typography variant="body2">{product.description}</Typography>
          </Container>
     );
};

export default Details;
