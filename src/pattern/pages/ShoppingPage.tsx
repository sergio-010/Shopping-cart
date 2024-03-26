import { useContext, useState } from "react";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { useFilteredProducts } from "../hooks/useParams";
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";


export const ShoppingPage = () => {
    const { addToCart, addFavorite, favorites } = useContext(ShoppingCartContext);
    const { productsQuery } = useProductos();
    const { filterData } = useFilteredProducts();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = filterData.filter(product =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="h-full bg-gradient-to-b from-slate-50 to-slate-700">
                <div className="flex items-center justify-center p-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="border border-gray-300 rounded mx-auto w-[400px] p-2 placeholder:text-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-8 mx-auto justify-center">
                    {productsQuery.isLoading ? (
                        <p>Loading...</p>
                    ) : productsQuery.isError ? (
                        <p>Error: {productsQuery.error.message}</p>
                    ) : filteredProducts && filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="w-[400px] mx-auto flex flex-col justify-between flex-wrap bg-[#F6F6F6] rounded-lg shadow-md p-4 border-black border-2" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img className="w-[200px] h-[200px] object-contain mx-auto mb-4 rounded-[10px]"
                                        src={product.image} alt={product.title} />
                                </Link>
                                <button
                                    className="w-6 h-6 hover:text-red-500 text-black rounded-md"
                                    onClick={() => addFavorite(product)}
                                >
                                    <CiHeart className={`w-6 h-6 ${favorites.includes(product) ? 'text-red-500' : ''}`} /> {/* Aplica la clase text-red-500 si el producto está en favoritos */}
                                </button>
                                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                                <p className="text-black">${product.price}</p>
                                <div className="flex justify-between items-end mt-4">
                                    <button className="w-full flex items-center justify-center border border-gray-300 text-black px-4 py-2 rounded-md hover:animate-bounce" onClick={() => addToCart(product)}>
                                        <FaPlus className="mr-1" />
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : <p>No hay productos disponibles</p>}
                </div>
            </div>
        </>
    );
};
