import React, {useEffect, useState} from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();
  const [productData, setProductsData] = useState([])

  useEffect(() => {
      const db = getFirestore();
  
      const productCollection = doc(db, "products", itemId)
  
      getDoc(productCollection)
        .then((snapshot) => {
          setProductsData({ id: snapshot.id, ...snapshot.data() })
          })
      }, [itemId])
    
      const cardStyle = {
        maxWidth: "300px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      };
    
      const imageStyle = {
        width: "100%",
        height: "auto",
        marginBottom: "10px",
        borderRadius: "4px",
      };
    
      const titleStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "5px",
      };
    
      const descriptionStyle = {
        fontSize: "14px",
        marginBottom: "5px",
      };

  return (
    <div className="card" style={cardStyle}>
      <img src={productData.image} alt={productData.title} style={imageStyle} />
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>
          {productData.title}
        </h5>
        <p className="card-text" style={descriptionStyle}>
          {productData.description}
        </p>
        <p className="card-price">
          ${productData.price}
        </p>
        {window.location.pathname !== `/item/${productData.id}` && (
          <Link to={`/item/${productData.id}`}>
            Ir a Detalle
          </Link>
        )}
      </div>
    </div>
  );
};

export default Item;
