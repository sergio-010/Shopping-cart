import { NavBar } from "../components/layouts/NavBar";
import { useProductos } from "../hooks/useProductos";

export const ShoppingPage = () => {
    const { productsQuery } = useProductos();

    if (productsQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (productsQuery.isError) {
        return <div>Error al cargar productos: {productsQuery.error.message}</div>;
    }

    if (!productsQuery.data) {
        return <div>No hay datos disponibles</div>;
    }

    return (
        <div className="flex">
            <div className="w-full">
                <NavBar />
            </div>
            <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8">
                {productsQuery.data.map((product) => (
                    <div className="w-[300px] h-[200px]" key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}$</p>
                        <img
                            className="w-20 h-[100px]"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
