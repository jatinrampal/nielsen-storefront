import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import HighChart from './HighChart';
import ProductTable from './ProductTable';

//Props interface for CategoryOverview
interface CategoryOverviewProps {
     selectedCategory: string;
}

//Component to display product data and charts
const CategoryOverview: React.FC<CategoryOverviewProps> = ({
     selectedCategory,
}) => {
     // State to store product data
     const [productData, setProductData] = useState<any[]>([]);

     // Fetch product data based on the selected category
     const { data, loading } = useFetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`,
     );

     // Update product data state when fetched data changes
     useEffect(() => {
          if (data) {
               setProductData(data);
          }
     }, [data]);

     if (!selectedCategory) {
          return null;
     }

     if (loading) return <p>Loading...</p>;

     return (
          <>
               {/* Passing product data for highchart */}
               <HighChart productData={productData} />

               {/* Passing product data for table */}
               <ProductTable productData={productData} />
          </>
     );
};

export default CategoryOverview;
