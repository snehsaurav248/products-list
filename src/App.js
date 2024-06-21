import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const iphoneProducts = [
      {
        id: 1,
        title: 'iPhone 12',
        description: '6.1-inch display, A14 Bionic chip, 5G capable',
        category: 'Smartphones',
        price: 799.00,
        rating: {
          rate: 4.5,
          count: 1200
        },
        image: ' https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-select-2020-family?wid=940&hei=1112&fmt=png-alpha&.v=1604343709000'
      },
      {
        id: 2,
        title: 'iPhone 12 Pro',
        description: '6.1-inch display, A14 Bionic chip, Pro camera system',
        category: 'Smartphones',
        price: 999.00,
        rating: {
          rate: 4.7,
          count: 900
        },
        image: ' https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-select-2020-family?wid=940&hei=1112&fmt=png-alpha&.v=1604021663000'
      },
      {
        id: 3,
        title: 'iPhone 11',
        description: '6.1-inch display, A13 Bionic chip, Dual-camera system',
        category: 'Smartphones',
        price: 599.00,
        rating: {
          rate: 4.6,
          count: 1100
        },
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-select-2019-family?wid=940&hei=1112&fmt=png-alpha&.v=1567022219953'
      },
      {
        id: 4,
        title: 'iPhone SE',
        description: '4.7-inch display, A13 Bionic chip, Touch ID',
        category: 'Smartphones',
        price: 399.00,
        rating: {
          rate: 4.4,
          count: 800
        },
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-2020-family?wid=940&hei=1112&fmt=png-alpha&.v=1586574260328'
      }
    ];

    setProducts(iphoneProducts);
  }, []);

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
