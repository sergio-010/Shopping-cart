import { useContext } from "react";
import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";


export const ShoppingPage = () => {
    const { addToCart, removeToCart } = useContext(ShoppingCartContext)
    const { productsQuery } = useProductos();

    return (
        <>
            <NavBar />
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8  mx-auto justify-center">
                {productsQuery.isLoading ? (
                    <p>Loading...</p>
                ) : productsQuery.isError ? (
                    <p>Error: {productsQuery.error.message}</p>
                ) : productsQuery.data && productsQuery.data.length ? (
                    productsQuery.data.map((product) => (
                        <div className="w-[400px] mx-auto flex flex-col flex-wrap bg-white rounded-lg shadow-md p-4" key={product.id}>
                            <img className="w-full h-[200px] object-contain mb-4 " src={product.image} alt={product.title} />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => addToCart(product)}>
                                    <FaPlus className="mr-1" />
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => removeToCart(product)}>
                                    <IoMdRemove className="mr-1" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : <p>No hay productos disponibles</p>}
            </div>
        </>
    );
};
