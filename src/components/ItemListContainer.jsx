import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{
            fontWeight: "bold",
            color: "rgb(57, 255, 20)",
            margin: "15px",
            fontSize: "2rem"
        }
        }>{greeting}</div>
    )
}

export default ItemListContainer