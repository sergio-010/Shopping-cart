import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingContext";

export const CardProduct = () => {
    const { id } = useParams();

    const { productQuery } = useGetProduct(id);

    const { addToCart } = useContext(ShoppingCartContext);

    if (!productQuery.data) return null;

    console.log(productQuery);

    return (
        <div className=" mt-8">
            {productQuery.isLoading ? (
                <p>Loading...</p>
            ) : productQuery.isError ? (
                <p>Error: {productQuery.error.message}</p>
            ) : (
                < div className=" w-[400px] mx-auto flex flex-col justify-between flex-wrap bg-[#F6F6F6]  rounded-lg shadow-md p-4 border-black border-2">

                    <img className="w-[200px] h-[200px] object-contain mx-auto mb-4 rounded-[10px]"
                        src={productQuery.data?.image}
                        alt={productQuery.data?.title}
                    />
                    <h1>{productQuery.data?.title}</h1>
                    <p>{productQuery.data?.price}</p>
                    <p>{productQuery.data?.description}</p>
                    <button className="w-full flex items-center justify-center mt-4 border bg-black text-white px-2 py-2 rounded-md " onClick={() => addToCart(productQuery.data)}>Shop Now</button>

                </div>
            )}
        </div>
    );
};
