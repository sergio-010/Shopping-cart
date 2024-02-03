// import { ProductCard } from "../components/ProductCard";
import { NavBar } from "../components/layouts/NavBar";
import { useProducts } from "../hooks/useProducts";
import salchicha from "../assets/salchicha.jpg";

export const ShoppingPage = () => {
    const { clothes } = useProducts();

    return (
        <div className="flex">
            <div className="w-full">
                <NavBar />
            </div>
            {/* <div>
                <h1 className="text-3xl w-28 uppercase h-4">Shopping</h1>
                <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8">
                    <ProductCard />
                </div>
            </div> */}
            <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8">
                {clothes.map((ropa) => (
                    <div className="w-[300px] h-[200px]" key={ropa.id}>
                        <h2>{ropa.title}</h2>
                        <p>{ropa.price}$</p>
                        <img
                            className="w-20 h-[100px]"
                            src={ropa.images && ropa.images.length > 0 ? ropa.images[0] : salchicha}
                            alt={ropa.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
