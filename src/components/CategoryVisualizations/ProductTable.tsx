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
import { useTranslation } from 'react-i18next';

// Interface for product details
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
     const { t } = useTranslation();

     return (
          <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
               <Table aria-label={t('productTableLabel')}>
                    <TableHead>
                         <TableRow>
                              <TableCell>{t('product')}</TableCell>
                              <TableCell>{t('price')}</TableCell>
                              <TableCell>{t('description')}</TableCell>
                              <TableCell sx={{ textAlign: 'center' }}>
                                   {t('rating')}
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
                                        {product.rating?.rate ?? t('n/a')}{' '}
                                        {t('basedOn')}{' '}
                                        {product.rating?.count ?? t('zero')}{' '}
                                        {t('reviews')}
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default ProductTable;
