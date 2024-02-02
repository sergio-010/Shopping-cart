import { useContext } from "react";
import salchicha from "../assets/salchicha.jpg";
import { ButtonsCounter } from "./ButtomsCounter";
import { ProductContext } from "../context/ContextApp";

export const ProductCard = () => {

    const { product } = useContext(ProductContext);

    return (
        <>
            <div className="w-[200px] h-[300px] bg-black rounded-[30px]">
                <div className="w-full h-full flex justify-center items-center flex-col gap-4">
                    <div className="w-full h-4 flex justify-center text-white uppercase">
                        <h2>{product.title}</h2>
                    </div>
                    <img className="w-40 h-[200px]" src={product.img ? product.img : salchicha} alt="" />
                    < ButtonsCounter />
                </div>
            </div>
        </>
    );
};