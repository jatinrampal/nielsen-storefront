import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import SelectionCriteria from './components/SelectionCriterias/SelectionCriteria';
import DataOverview from './components/CategoryVisualizations/DataOverview';
import Header from './components/Header';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
     padding: 30px;
     display: flex;
     gap: 20px;
`;

const AppContent: React.FC = () => {
     // Destructuring values and methods from Store Context
     const {
          categories,
          selectedCategory,
          setSelectedCategory,
          products,
          selectedProduct,
          setSelectedProduct,
     } = useStore();

     return (
          <div>
               {/* Header of the application - essentially the app bar */}
               <Header />
               <Container>
                    {/* Selection Criteria - houses the 2 dropdowns */}
                    <SelectionCriteria
                         categories={categories}
                         selectedCategory={selectedCategory}
                         setSelectedCategory={setSelectedCategory}
                         products={products}
                         selectedProduct={selectedProduct}
                         setSelectedProduct={setSelectedProduct}
                    />
                    {/* Data Overview - renders the visualizations based on user selection */}
                    <DataOverview
                         selectedCategory={selectedCategory}
                         selectedProduct={selectedProduct}
                    />
               </Container>
          </div>
     );
};

// Main app component that provides the store context for global state management
const App: React.FC = () => {
     return (
          <StoreProvider>
               <AppContent />
          </StoreProvider>
     );
};

export default App;
