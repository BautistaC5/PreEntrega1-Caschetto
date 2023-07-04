import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
//import { ProductsData } from "../json/Products";

import {collection, getDocs, getFirestore} from "firebase/firestore"


const Home = () => {
  const [productData, setProductsData] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products")

    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
    })
  }, [])



  return (
    <div>
      <ItemListContainer productsData={productData} />
    </div>
  );
};

export default Home;
