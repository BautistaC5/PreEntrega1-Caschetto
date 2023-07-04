import React from 'react'
import { Button } from "react-bootstrap"
import { doc, getDoc, addDoc, collection, getFirestore, updateDoc } from 'firebase/firestore'
import {useParams} from "react-router-dom"

const UpdateProduct = () => {
    const [category, setCategory] = React.useState()
    const [description, setDescription] = React.useState()
    const [image, setImage] = React.useState()
    const [price, setPrice] = React.useState()
    const [stock, setStock] = React.useState()
    const [title, setTitle] = React.useState()
    const [productData, setProductsData] = React.useState()
    const {itemId} = useParams()

    React.useEffect(() => {
        const db = getFirestore();

        const productCollection = doc(db, "products", itemId)

        getDoc(productCollection)
            .then((snapshot) => {
                setProductsData([{ id: snapshot.id, ...snapshot.data() }])
            })
    }, [])

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e) => {
        setImage(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleStockChange = (e) => {
        setStock(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {
        const newProduct = {
            category,
            description,
            image,
            price,
            stock,
            title,
        }



        const db = getFirestore()
        const updateProductsCollection = doc(db, "products", itemId)
        updateDoc(updateProductsCollection, newProduct)
    }




    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "50%", margin: "20px", gap: "10px", alignItems: "center" }}>
            <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Categoria' value={productData?.category}/>
            <input type="text" onChange={(e) => handleDescriptionChange(e)} placeholder='Descripcion'value={productData?.description} />
            <input type="text" onChange={(e) => handleImageChange(e)} placeholder='Imagen' value={productData?.image}/>
            <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Precio' value={productData?.price}/>
            <input type="text" onChange={(e) => handleStockChange(e)} placeholder='Stock' value={productData?.stock}/>
            <input type="text" onChange={(e) => handleTitleChange(e)} placeholder='Titulo' value={productData?.title}/>
            <Button onClick={handleSubmit}> Modificar producto </Button>
        </div>
    )
}

export default UpdateProduct