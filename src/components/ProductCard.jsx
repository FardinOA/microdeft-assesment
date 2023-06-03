import React from "react";

const ProductCard = ({ product, getEditable }) => {
    const deleteHandeler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(
                `https://fakestoreapi.com/products/${product?.id}`,
                config
            );
            console.log(data);
        } catch (error) {}
    };
    return (
        <div>
            <div>
                <img
                    className=" h-[10rem] w-[15rem] "
                    src={product?.image}
                    alt={product?.title}
                />
            </div>
            <div className=" flex justify-between p-2 ">
                <div>
                    {" "}
                    <h1>{product?.title}</h1>
                    <p>{product?.price}</p>
                    <p>{product?.category}</p>
                </div>
                <div className=" flex flex-col  ">
                    <button
                        onClick={() =>
                            getEditable({ ...product, id: product.id })
                        }
                    >
                        edit
                    </button>
                    <button onClick={deleteHandeler}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
