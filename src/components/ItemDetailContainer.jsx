import React from "react";
import ProductCard from "../components/ProductCard";
const ItemDetailContainer = ({ productData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      {productData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
      
      <div  style={{
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        color: "white",
        alignItems: "start"
      }}>
        <h2>Descripcion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo eaque tempore impedit magni harum debitis repudiandae, voluptas in repellat dolorum labore non molestias excepturi reprehenderit neque expedita odit accusantium.
        </p>
      </div>
      
    </div>
  );
};

export default ItemDetailContainer;
