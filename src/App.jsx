import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllProducts from "./components/AllProducts";
import AddProduct from "./components/AddProduct";

function App() {
    const [search, setSearch] = useState("");
    const [editable, setEditable] = useState(null);
    const getEditable = (product) => {
        setEditable(product);
    };

    const searchHandeler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `https://dummyjson.com/products/search?q=${search}`
            );
            console.log(data);
        } catch (error) {}
    };

    console.log("editable", editable);
    return (
        <div>
            <div className=" flex justify-center h-12 w-full bg-gray-400  ">
                <div>
                    {" "}
                    <input
                        className=" border-2 "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="search here"
                    />
                    <button onClick={searchHandeler} className=" border-2 ">
                        Submit
                    </button>
                </div>
            </div>
            <div className=" flex justify-between  ">
                <div className=" w-[70%] ">
                    <AllProducts getEditable={getEditable} />
                </div>
                <div className=" w-[30%] ">
                    <AddProduct editable={editable} />
                </div>
            </div>
        </div>
    );
}

export default App;
