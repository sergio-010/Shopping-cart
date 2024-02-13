import { useContext, useMemo } from "react";
import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";



export const ShoppingPage = () => {
    const { addToCart } = useContext(ShoppingCartContext)
    const { productsQuery } = useProductos();
    const [searchParams] = useSearchParams();


    const filterData = useMemo(() => {
        const query = searchParams.get('category');
        console.log(query)
        if (query) {
            return productsQuery.data.filter((product) => product.category === query);
        }
        return productsQuery.data;
    }, [productsQuery.data, searchParams])


    return (
        <>
            <NavBar />
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8  mx-auto justify-center">
                {productsQuery.isLoading ? (
                    <p>Loading...</p>
                ) : productsQuery.isError ? (
                    <p>Error: {productsQuery.error.message}</p>
                ) : filterData && filterData.length > 0 ? (
                    filterData.map((product) => (
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
