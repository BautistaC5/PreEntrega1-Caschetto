import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const Category = () => {
  const { categoryId } = useParams();
  const [productsData, setProductsData] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const productCollection = collection(db, "products");
      const categoryQuery = query(productCollection, where("category", "==", categoryId));

      try {
        const snapshot = await getDocs(categoryQuery);
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductsData(products);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId, db]);

  return <ItemListContainer productsData={productsData} />;
};

export default Category;
