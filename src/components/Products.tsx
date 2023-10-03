import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProds } from '../actions/Actions';



function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProds()
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      {products.map((product:any) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          {
product.images.map((image: string, index: number) => (  
<img key={index} src={image} alt="" />
))
}
          <Link to={`/product/${product.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default Product;