import React from "react";

const ItemDetail = ({ productData }) => {
    return (
        <div className="card">
            <img src={productData.image} alt={productData.title} />
            <div className="card-body">
                <h5 className="card-title">{productData.title}</h5>
                <p className="card-text">{productData.description}</p>
                <p className="card-price">${productData.price}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
