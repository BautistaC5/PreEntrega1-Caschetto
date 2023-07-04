import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartDetailCard = ({ product }) => {
    const { count } = useContext(CartContext);
    const qty = count.products.find((item) => item.productId === product.id)?.qty || 0;

    const styles = {
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
        },
        image: {
            width: "150px",
            height: "150px",
            objectFit: "cover",
            marginBottom: "10px",
        },
        title: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "5px",
        },
        quantity: {
            fontSize: "14px",
        },
    };

    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.quantity}>
                Cantidad agregada: <Badge variant="primary">{qty}</Badge>
            </p>
        </div>
    );
};

export default CartDetailCard;
