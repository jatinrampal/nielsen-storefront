import React from 'react';
import {
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Paper,
} from '@mui/material';

//Interface for product details
interface Product {
     id: number;
     title: string;
     price: number;
     description: string;
     rating?: {
          rate: number;
          count: number;
     };
}

interface ProductTableProps {
     productData: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ productData }) => {
     return (
          <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
               <Table aria-label="product table">
                    <TableHead>
                         <TableRow>
                              <TableCell>Product</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell sx={{ textAlign: 'center' }}>
                                   Rating
                              </TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {productData.map((product) => (
                              <TableRow key={product.id}>
                                   <TableCell>{product.title}</TableCell>
                                   <TableCell>
                                        ${product.price.toFixed(2)}
                                   </TableCell>
                                   <TableCell>{product.description}</TableCell>
                                   <TableCell sx={{ textAlign: 'center' }}>
                                        {/* Adding additional info for number of reviews */}
                                        {product.rating?.rate ?? 'N/A'} based on{' '}
                                        {product.rating?.count ?? '0'} reviews
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default ProductTable;
