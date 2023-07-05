import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "products", id);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        setProductData({ id: productDoc.id, ...productDoc.data() });
      }
    };

    getProduct();
  }, [id]);

  return (
    <div>
      {productData ? (
        <>
          <ItemDetail productData={productData} />
          <h2>DESCRIPCION</h2>
          <p>{productData.description}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
