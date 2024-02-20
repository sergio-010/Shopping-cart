import { useContext, useState } from "react";
import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { useFilteredProducts } from "../hooks/useParams";
import { Product } from "../interfaces/interface";

export const ShoppingPage = () => {
    const { addToCart } = useContext(ShoppingCartContext);
    const { productsQuery } = useProductos();
    const { filterData } = useFilteredProducts();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(filterData);

    const filterPrice = (type: 'max' | 'min') => {
        if (filterData.length === 0) return;

        const sortedProducts = type === 'max' ? filterData.sort((a, b) => b.price - a.price) : filterData.sort((a, b) => a.price - b.price);
        setFilteredProducts([...sortedProducts]);
    };
    const cleanFilter = () => {
        setFilteredProducts([...filterData]);
    };

    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-b from-slate-50 to-slate-700 h-full">
                <div className="flex items-center justify-center p-4 ">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="border border-gray-300 rounded mx-auto w-[400px] p-2 placeholder:text-indigo-500 "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => filterPrice('max')}>Filtrar mayor precio</button >
                        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => filterPrice('min')}>Filtrar menor precio</button >
                        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => cleanFilter()}>Limpiar</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-8  mx-auto justify-center ">

                    {productsQuery.isLoading ? (
                        <p>Loading...</p>
                    ) : productsQuery.isError ? (
                        <p>Error: {productsQuery.error.message}</p>
                    ) : filteredProducts && filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="w-[400px] mx-auto flex flex-col justify-between flex-wrap bg-gradient-to-b from-slate-50 to-slate-700 rounded-lg shadow-md p-4 border-black border-2" key={product.id}>
                                <img className="w-[200px] h-[200px] object-contain mx-auto mb-4 rounded-[10px]" src={product.image} alt={product.title} />
                                <h2 className="text-lg font-semibold mb-2 text-white ">{product.title}</h2>
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
