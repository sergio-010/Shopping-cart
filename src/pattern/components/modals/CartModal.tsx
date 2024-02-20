import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Product } from "../../interfaces/interface";
import { IoRemove } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
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
                <div className='w-[400px] p-4 absolute top-[72px] shadow animate-fade-down animate-duration-300 right-0 backdrop-blur-sm overflow-y-auto '
                    style={{ height: 'calc(100vh - 72px)' }}>
                    <div className="flex flex-col h-full overflow-auto">
                        <button onClick={onClose} className=" w-6 h-6  hover:text-red-500 text-black   rounded-md "><VscChromeClose className="w-6 h-6" /></button>
                        {products.map((product) => (
                            <div key={product.id} >
                                <div className="w-full flex flex-col justify-between flex-wrap bg-gradient-to-b from-slate-50 to-slate-700 rounded-lg shadow-md p-4 border-black border-2 mb-9 mt-4 overflow-y-auto">
                                    <p className="text-lg font-semibold mb-2">{product.title}</p>
                                    <p className="text-black">{product.price}</p>
                                    <p className="text-black">{product.quantity}</p>
                                    <img src={product.image} className="w-full h-[200px] object-contain mb-4 animate-jump-in" alt="" />
                                    <div className="flex justify-center mt-4 gap-5">
                                        <button className=" flex items-center justify-center bg-black text-white px-4 py-2 rounded-md" onClick={() => onQuantityChange(product, -1)}>
                                            <IoRemove className="w-4 h-4" color="white" />
                                        </button>
                                        <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md" onClick={() => onQuantityChange(product, 1)}>
                                            <FaPlus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex justify-end ">
                                        <button className=" flex items-center justify-center  text-red-600 px-4 py-2 rounded-md " onClick={() => removeToCart(product)}>
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <span className="text-lg font-semibold">Total: {total.toFixed(2)}</span>
                    </div>
                </div>
            }
        </>

    );
};
