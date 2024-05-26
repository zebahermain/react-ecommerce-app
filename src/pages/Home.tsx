import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    // Fetch products from an API or define them here
    const products = [
      { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
      { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
    ];
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
