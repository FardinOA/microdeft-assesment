import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct = ({ editable }) => {
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (editable) {
            setName(editable?.title);
            setCategory(editable?.category);
            setImage(editable?.image);
            setPrice(editable?.price);
            setDes(editable?.description);
        }
    }, [editable]);

    const submitHandeler = async (e) => {
        e.preventDefault();

        try {
            const config = { headers: { "Content-Type": "application/json" } };

            if (editable) {
                const { data } = await axios.post(
                    `https://fakestoreapi.com/products/${editable?.id}`,
                    {
                        title: name,
                        description: des,
                        category,
                        image,
                        price,
                    },
                    config
                );
                console.log(data);
            } else {
                const { data } = await axios.post(
                    "https://dummyjson.com/products/add",
                    {
                        title: name,
                        description: des,
                        category,
                        image,
                        price,
                    },
                    config
                );
                console.log(data);
            }
        } catch (error) {
            console.log("error", error);
        }

        console.log({
            name,
            des,
            category,
            image,
            price,
        });
    };
    return (
        <>
            <div className=" p-4 ">
                <form onSubmit={submitHandeler} action="">
                    <div className=" flex flex-col ">
                        <label htmlFor="">Name</label>
                        <input
                            className="border-2"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className=" flex flex-col ">
                        <label htmlFor="">Description</label>
                        <input
                            className="border-2"
                            type="text"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                        />
                    </div>
                    <div className=" flex flex-col ">
                        <label htmlFor="">Category</label>
                        <select
                            className="border-2 text-black "
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            name=""
                            id=""
                        >
                            <option value="men's clothing">
                                men's clothing
                            </option>
                            <option value="women's clothing">
                                women's clothing
                            </option>
                            <option value="electronics">electronics</option>
                        </select>
                    </div>
                    <div className=" flex flex-col ">
                        <label htmlFor="">Image Url</label>
                        <input
                            className="border-2"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className=" flex flex-col ">
                        <label htmlFor="">Price</label>
                        <input
                            className="border-2"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
