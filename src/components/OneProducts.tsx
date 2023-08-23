import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../actions/Actions';

// Создайте интерфейс для типа продукта
interface Product {
  id: number;
  title: string;
  images:[]
}

function OneProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getOneProduct(id)
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      {
product.images.map((image: string, index: number) => (  
<img key={index} src={image} alt="" />
))
}
    </div>
  );
}

export default OneProducts;
