import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping}/>
        <span style={{marginRight: "20px"}}>8</span>
    </div>
  )
}

export default CartWidget