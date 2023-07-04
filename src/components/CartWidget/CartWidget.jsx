import React from 'react'
import {CartContext} from "../../context/CartContext"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import {Link} from "react-router-dom"

const CartWidget = () => {
    const {count} = useContext(CartContext)
  return (
    <div style={{
        display: "flex",
        width: "40px",
        justifyContent: "space-between",
        alignItems: "center",
    }}>

      <Link to="/cart">
      <FontAwesomeIcon icon={faCartShopping} />
        <span>{count.qtyItems}</span>
      </Link>
    </div>
  )
}

export default CartWidget