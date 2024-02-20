import React, { useContext } from "react"; // Import React
import { ShoppingCartContext } from "../context/ShoppingContext";

export const CardProduct = () => {
    const { products } = useContext(ShoppingCartContext);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                </div>
            ))}
        </div>
    );
};
