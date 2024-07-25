import React, { createContext, useContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

//Interface for StoreContext
interface StoreContextType {
     categories: string[];
     selectedCategory: string;
     setSelectedCategory: (category: string) => void;
     products: string[];
     selectedProduct: string;
     setSelectedProduct: (product: string) => void;
     setCategories: (categories: string[]) => void;
     setProducts: (products: string[]) => void;
}

//Setting initial value
const StoreContext = createContext<StoreContextType | undefined>(undefined);

//Provider component to provide context values
export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
     children,
}) => {
     //States to hold specific values regarding categories and products
     const [categories, setCategories] = useState<string[]>([]);
     const [selectedCategory, setSelectedCategory] = useState<string>('');
     const [products, setProducts] = useState<string[]>([]);
     const [selectedProduct, setSelectedProduct] = useState<string>('');

     //API calls for fetching Categories
     const { data: categoriesData } = useFetch(
          'https://fakestoreapi.com/products/categories',
     );

     //API calls for fetching Products
     const { data: productsData } = useFetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`,
     );

     //Updating when change in category data
     useEffect(() => {
          if (categoriesData && categoriesData.length > 0) {
               setCategories(categoriesData);
          }
     }, [categoriesData]);

     //Updating when change in selected category or product data
     useEffect(() => {
          if (selectedCategory && productsData && productsData.length > 0) {
               setProducts(productsData.map((product: any) => product.title));
          }
     }, [selectedCategory, productsData]);

     return (
          <StoreContext.Provider
               value={{
                    categories,
                    selectedCategory,
                    setSelectedCategory,
                    products,
                    selectedProduct,
                    setSelectedProduct,
                    setCategories,
                    setProducts,
               }}
          >
               {children}
          </StoreContext.Provider>
     );
};

//Hook to use store context
export const useStore = () => {
     const context = useContext(StoreContext);
     if (!context) {
          throw new Error('useStore must be used within a StoreProvider');
     }
     return context;
};
