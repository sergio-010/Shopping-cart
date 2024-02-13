import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import { FaPlus } from "react-icons/fa";
import { Product } from "../../interfaces/interface";
interface CartModalProps {
    onClose: () => void;
}

export const CartModal = ({ onClose }: CartModalProps) => {
    const { products, handleUpdateQuantity, removeToCart } = useContext(ShoppingCartContext);
    const onQuantityChange = (product: Product, change: number) => {
        const currentQuantity = product.quantity ?? 0;
        const newQuantity = currentQuantity + change;

        if (newQuantity >= 0) {
            handleUpdateQuantity(product, newQuantity);

            if (newQuantity === 0) {
                removeToCart(product);
            }
        }
    };

    const total = products.reduce((acc, product) => acc + (product.quantity ?? 0) * product.price, 0);

    return (
        <>
            {products.length > 0 &&
                <div className='w-[400px] h-calc(100vh-72px) p-4 fixed top-[72px] shadow animate-fade-down animate-duration-300 right-0 bg-blue-100 '>
                    <div className="flex flex-col h-full">
                        <button onClick={onClose} className="bg-red-500 text-white px-4 pt-8 rounded-md">Close</button>
                        {products.map((product) => (
                            <div key={product.id}>
                                <p className="text-lg font-semibold mb-2">{product.title}</p>
                                <p className="text-gray-600">{product.price}</p>
                                <p className="text-gray-600">{product.quantity}</p>
                                <img src={product.image} className="w-full h-[200px] object-contain mb-4 animate-jump-in" alt="" />
                                <button className="w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => onQuantityChange(product, 1)}>
                                    <FaPlus className="mr-1" />
                                </button>
                                <button className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => onQuantityChange(product, -1)}>
                                    -
                                </button>
                                <button className="w-full flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => removeToCart(product)}>
                                    Remove
                                </button>
                                
                            </div>
                        ))}
                        <span>Total: {total}</span>
                    </div>
                </div>
            }
        </>

    );
};
