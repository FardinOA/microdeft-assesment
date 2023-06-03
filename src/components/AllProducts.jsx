import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = ({ getEditable }) => {
    const [products, setProducts] = useState([]);
    const addNewProducts = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(
                `https://fakestoreapi.com/products`
            );
            console.log(data);
            setProducts(data);
        } catch (error) {}
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div>
            <div className=" flex flex-row flex-wrap justify-between ">
                {products?.map((ele, ind) => (
                    <div key={`product-${ind}`}>
                        <ProductCard
                            getEditable={getEditable}
                            addNewProducts={addNewProducts}
                            product={ele}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
