import { ProductCard } from "../components/ProductCard";
import { NavBar } from "../components/layouts/NavBar";



export const ShoppingPage = () => {
    return (
        <div className="flex">
            <NavBar />
            <div>
                <h1 className="text-3xl w-28 uppercase h-4">Shopping</h1>
                <div className="ml-10 mt-10 marker: flex flex-row flex-wrap gap-8">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};
