import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";
interface CartModalProps {
    onClose: () => void;
}

export const CartModal = ({ onClose }: CartModalProps) => {
    const { products } = useContext(ShoppingCartContext);

    return (
        <div className='w-[400px] h-calc(100vh-72px) p-4 fixed top-[72px] shadow animate-fade-down animate-duration-300 right-0 bg-blue-100 '>
            <div className="flex flex-col h-full">
                {products.map((product) => (
                    <div key={product.id}>
                        <p className="text-lg font-semibold mb-2">{product.title}</p>
                        <p className="text-gray-600">{product.price}</p>
                        <p className="text-gray-600">{product.quantity}</p>
                        <img src={product.image} className="w-full h-[200px] object-contain mb-4" alt="" />
                        <button>

                        </button>


                    </div>
                ))}
                <button onClick={onClose} className="bg-red-500 text-white px-4 pt-8 rounded-md">Close</button>
            </div>
        </div>

    );
};
