import React, {useEffect, useState} from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const Item = () => {
  const { itemId } = useParams();
  const [productData, setProductsData] = useState([])

  useEffect(() => {
      const db = getFirestore();
  
      const productCollection = doc(db, "products", itemId)
  
      getDoc(productCollection)
        .then((snapshot) => {
          setProductsData([{ id: snapshot.id, ...snapshot.data() }])
          })
      }, [itemId])

  return <ItemDetailContainer productData={productData} />;
};

export default Item;
