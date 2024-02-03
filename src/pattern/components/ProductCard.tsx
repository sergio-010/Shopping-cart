import { useContext } from "react";
import { ButtonsCounter } from "./ButtomsCounter";
import salchicha from "../assets/salchicha.jpg";
import { ShoppingContext } from "../context/ShoppingContext";

export const ProductCard = () => {

    const { products = [] } = useContext(ShoppingContext);


    return (
        <>
            <div className="w-[200px] h-[300px] bg-black rounded-[30px]">
                {products.map((product) => (
                    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
                        <div className="w-full h-4 flex justify-center text-white uppercase">
                            <h2>{product.title}</h2>
                        </div>
                        <img className="w-40 h-[200px]" src={product.img ? product.img : salchicha} alt="Perrito" />
                        < ButtonsCounter />
                    </div>
                ))}
            </div>
        </>
    );
};