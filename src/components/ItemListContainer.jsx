import React from "react";
import ProductCard from "../components/ProductCard";
const ItemListContainer = ({ productsData }) => {
  return (
    <div className="divCards">
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
