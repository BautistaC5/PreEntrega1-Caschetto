import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartButtons = ({ customStyle, productId }) => {
  const { count, setCount } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleMoreClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleLessClick = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity > 0) {
      const existingProduct = count.products.find(
        (p) => p.productId === productId
      );

      if (existingProduct) {
        setCount((prevState) => ({
          qtyItems: prevState.qtyItems - existingProduct.qty + quantity,
          products: prevState.products.map((p) =>
            p.productId === productId ? { ...p, qty: quantity } : p
          ),
        }));
      } else {
        setCount((prevState) => ({
          qtyItems: prevState.qtyItems + quantity,
          products: [
            ...prevState.products,
            { productId: productId, qty: quantity },
          ],
        }));
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "10px" }}>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleLessClick}
        >
          -
        </Button>
        <span style={{ margin: "10px", fontSize: "18px" }}>{quantity}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleMoreClick}
        >
          +
        </Button>
      </div>
      <Button
        className="ml-2"
        variant={customStyle.backgroundColor}
        onClick={addToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
