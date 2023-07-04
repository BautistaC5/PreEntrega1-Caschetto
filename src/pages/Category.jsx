import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { ProductData } from "../json/Products";
import { useParams } from "react-router-dom";
const Category = () => {
  const {categoryId} = useParams()

  const productsFilteredByCategory = ProductData.filter(products => products.category === categoryId);

  return <ItemListContainer productsData={productsFilteredByCategory} />;
};

export default Category;
