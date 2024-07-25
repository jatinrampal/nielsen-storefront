import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductTable from '../../components/CategoryVisualizations/ProductTable';

describe('Tests for Product Table', () => {
     const mockProductData = [
          {
               id: 1,
               title: 'Product 1',
               price: 29.99,
               description: 'test description 1',
               rating: { rate: 4.5, count: 100 },
          },
          {
               id: 2,
               title: 'Product 2',
               price: 59.99,
               description: 'test description 2',
               rating: { rate: 3.8, count: 50 },
          },
     ];

     //Test to check table rendered
     test('renders table with product data', () => {
          render(<ProductTable productData={mockProductData} />);

          expect(screen.getByText('Product')).toBeInTheDocument();
          expect(screen.getByText('Price')).toBeInTheDocument();
          expect(screen.getByText('Description')).toBeInTheDocument();
          expect(screen.getByText('Rating')).toBeInTheDocument();

          expect(screen.getByText('Product 1')).toBeInTheDocument();
          expect(screen.getByText('$29.99')).toBeInTheDocument();
          expect(screen.getByText('test description 1')).toBeInTheDocument();
          expect(
               screen.getByText('4.5 based on 100 reviews'),
          ).toBeInTheDocument();

          expect(screen.getByText('Product 2')).toBeInTheDocument();
          expect(screen.getByText('$59.99')).toBeInTheDocument();
          expect(screen.getByText('test description 2')).toBeInTheDocument();
          expect(
               screen.getByText('3.8 based on 50 reviews'),
          ).toBeInTheDocument();
     });

     //Test to check data with no rating
     test('renders table with missing rating', () => {
          const dataWithMissingRating = [
               {
                    id: 3,
                    title: 'Product 3',
                    price: 89.99,
                    description: 'test description 3',
               },
          ];

          render(<ProductTable productData={dataWithMissingRating} />);

          expect(screen.getByText('Product 3')).toBeInTheDocument();
          expect(screen.getByText('$89.99')).toBeInTheDocument();
          expect(screen.getByText('test description 3')).toBeInTheDocument();
          expect(
               screen.getByText('N/A based on 0 reviews'),
          ).toBeInTheDocument();
     });

     //Test to check table with no product data
     test('renders table with no product data', () => {
          render(<ProductTable productData={[]} />);

          expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
          expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
          expect(screen.queryByText('Product 3')).not.toBeInTheDocument();
     });
});
