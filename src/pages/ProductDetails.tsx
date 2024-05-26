import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addItemToCart } from '../redux/slices/cartSlice';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : null;
  const product = useSelector((state: RootState) =>
    state.products.products.find(product => product.id === productId)
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    dispatch(addItemToCart({ id: product.id, quantity: 1 }));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
