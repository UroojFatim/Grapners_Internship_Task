import React, { useState, useEffect } from 'react';
import { getRandomTitle } from '../utils/randomTitle';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const productsWithRandomTitles = data.map((product: Product) => ({
          ...product,
          name: getRandomTitle()
        }));
        setProducts(productsWithRandomTitles);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-50 w-96" >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-800">{product.name}</span>
              <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
