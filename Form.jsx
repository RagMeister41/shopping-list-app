import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ handleAddItems }) => {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim()) return;
    const newItem = {
        id: uuidv4(),
        product,
        quantity,
        packed: false,
    };
    handleAddItems(newItem);
    setProduct("");
    setQuantity(1);
    };

    return (
    <form onSubmit={handleSubmit} className="formWrapper">
        <input
        type="text"
        placeholder="Enter product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
        />
        <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="submit">Add Item</button>
    </form>
    );
};

export default Form;
