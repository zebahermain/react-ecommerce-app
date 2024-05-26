import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => {
            const product = products.find(product => product.id === item.id);
            return (
              <li key={item.id}>
                {product?.name} - Quantity: {item.quantity}
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
