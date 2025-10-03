import React from 'react';
import DarkHeader from '../components/DarkHeader';
import Products from '../components/Products';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <DarkHeader />
      <Products />
    </div>
  );
};

export default ProductsPage;