import { useContext, useState } from "react";
import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { useFilteredProducts } from "../hooks/useParams";

export const ShoppingPage = () => {
    const { addToCart } = useContext(ShoppingCartContext);
    const { productsQuery } = useProductos();
    const { filterData } = useFilteredProducts();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = filterData.filter(product =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <input
                type="text"
                placeholder="Buscar..."
                className="border border-gray-300 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8  mx-auto justify-center">

                {productsQuery.isLoading ? (
                    <p>Loading...</p>
                ) : productsQuery.isError ? (
                    <p>Error: {productsQuery.error.message}</p>
                ) : filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="w-[400px] mx-auto flex flex-col flex-wrap bg-white rounded-lg shadow-md p-4" key={product.id}>
                            <img className="w-full h-[200px] object-contain mb-4 " src={product.image} alt={product.title} />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => addToCart(product)}>
                                    <FaPlus className="mr-1" />
                                    Agregar
                                </button>
                            </div>
                        </div>
                    ))
                ) : <p>No hay productos disponibles</p>}
            </div>
        </>
    );
};
