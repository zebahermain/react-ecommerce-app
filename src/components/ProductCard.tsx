import React from 'react';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
