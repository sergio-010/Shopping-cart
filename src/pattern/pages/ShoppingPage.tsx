import { useContext } from "react";
import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";
import { ShoppingCartContext } from "../context/ShoppingContext";


export const ShoppingPage = () => {
    const { addToCart } = useContext(ShoppingCartContext)
    const { productsQuery } = useProductos();

    return (
        <div className="flex justify-between">
            <NavBar />
            <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8 grow">
                {productsQuery.isLoading ? (
                    <p>Loading...</p>
                ) : productsQuery.isError ? (
                    <p>{productsQuery.isError}</p>
                ) : productsQuery.data && productsQuery.data.length ? (
                    productsQuery.data.map((product) => (
                        <div className="w-[300px] h-[200px]" key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.price}$</p>
                            <img
                                className="w-20 h-[100px]"
                                src={product.image}
                                alt={product.title}
                            />
                            <button className="bg-red-500 text-white"
                                onClick={() => addToCart(product)} >Add to cart</button>
                        </div>
                    ))
                ) : <p>No hay productoss</p>
                }
            </div>
        </div>
    );
};
