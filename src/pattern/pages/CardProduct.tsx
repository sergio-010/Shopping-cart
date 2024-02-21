import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";

export const CardProduct = () => {
    const { id } = useParams();

    const { productQuery } = useGetProduct(id);

    console.log(productQuery);

    return (
        <div className=" mt-8">
            {productQuery.isLoading ? (
                <p>Loading...</p>
            ) : productQuery.isError ? (
                <p>Error: {productQuery.error.message}</p>
            ) : (
                < div className=" w-[400px] mx-auto flex flex-col justify-between flex-wrap bg-gradient-to-b from-slate-50 to-slate-700 rounded-lg shadow-md p-4 border-black border-2">
                    <h1>{productQuery.data?.title}</h1>
                    <p>{productQuery.data?.price}</p>
                    <p>{productQuery.data?.description}</p>
                    <img className="w-[200px] h-[200px] object-contain mx-auto mb-4 rounded-[10px]"
                        src={productQuery.data?.image}
                        alt={productQuery.data?.title}
                    />

                </div>
            )}
        </div>
    );
};
