import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import SelectionCriteria from './components/SelectionCriterias/SelectionCriteria';
import DataOverview from './components/CategoryVisualizations/DataOverview';
import Header from './components/Header';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Styled components
const Container = styled.div`
     padding: 30px;
     display: flex;
     gap: 20px;
`;

interface AppProps {
     toggleTheme: () => void;
     isDarkMode: boolean;
}

const AppContent: React.FC<AppProps> = ({ toggleTheme, isDarkMode }) => {
     const { i18n } = useTranslation();

     const {
          categories,
          selectedCategory,
          setSelectedCategory,
          products,
          selectedProduct,
          setSelectedProduct,
     } = useStore();

     const changeLanguage = (language: string) => {
          i18n.changeLanguage(language);
     };

     return (
          <div>
               <Header
                    toggleTheme={toggleTheme}
                    isDarkMode={isDarkMode}
                    changeLanguage={changeLanguage}
               />
               <Container>
                    <SelectionCriteria
                         categories={categories}
                         selectedCategory={selectedCategory}
                         setSelectedCategory={setSelectedCategory}
                         products={products}
                         selectedProduct={selectedProduct}
                         setSelectedProduct={setSelectedProduct}
                    />
                    <DataOverview
                         selectedCategory={selectedCategory}
                         selectedProduct={selectedProduct}
                    />
               </Container>
          </div>
     );
};

// Main app component that provides the store context for global state management
const App: React.FC<AppProps> = (props) => {
     return (
          <StoreProvider>
               <AppContent {...props} />
          </StoreProvider>
     );
};

export default App;
