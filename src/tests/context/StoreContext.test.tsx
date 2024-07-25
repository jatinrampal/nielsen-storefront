import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StoreProvider, useStore } from '../../context/StoreContext';

jest.mock('../../hooks/useFetch', () => ({
     __esModule: true,
     default: jest.fn(),
}));

const mockUseFetch = require('../../hooks/useFetch').default;

describe('Tests for Store Context Provider', () => {
     //Test for fetching categories
     it('should set categories from useFetch data', async () => {
          const mockCategories = ['Sports', 'Shows'];
          mockUseFetch.mockImplementation((url: string) => {
               if (url === 'https://fakestoreapi.com/products/categories') {
                    return { data: mockCategories };
               }
               return { data: [] };
          });

          const TestComponent = () => {
               const { categories } = useStore();
               return (
                    <div>
                         {categories.map((category) => (
                              <div key={category} data-testid="category">
                                   {category}
                              </div>
                         ))}
                    </div>
               );
          };

          render(
               <StoreProvider>
                    <TestComponent />
               </StoreProvider>,
          );
          await act(async () => {
               await new Promise((resolve) => setTimeout(resolve, 0));
          });

          const categoryElements = screen.getAllByTestId('category');
          expect(categoryElements).toHaveLength(mockCategories.length);
          mockCategories.forEach((category) => {
               expect(screen.getByText(category)).toBeInTheDocument();
          });
     });

     //Test for fetching products based on categories
     it('should set products when a category is selected', async () => {
          const mockProducts = [{ title: 'Football' }, { title: 'Tennis' }];
          mockUseFetch.mockImplementation((url: string) => {
               if (
                    url === 'https://fakestoreapi.com/products/category/Sports'
               ) {
                    return { data: mockProducts };
               }
               return { data: [] };
          });

          const TestComponent = () => {
               const { products, setSelectedCategory } = useStore();

               React.useEffect(() => {
                    setSelectedCategory('Sports');
               }, [setSelectedCategory]);

               return (
                    <div>
                         {products.map((product) => (
                              <div key={product} data-testid="product">
                                   {product}
                              </div>
                         ))}
                    </div>
               );
          };

          render(
               <StoreProvider>
                    <TestComponent />
               </StoreProvider>,
          );

          await act(async () => {
               await new Promise((resolve) => setTimeout(resolve, 0));
          });

          const productElements = screen.getAllByTestId('product');
          expect(productElements).toHaveLength(mockProducts.length);
          mockProducts.forEach((product) => {
               expect(screen.getByText(product.title)).toBeInTheDocument();
          });
     });
});
