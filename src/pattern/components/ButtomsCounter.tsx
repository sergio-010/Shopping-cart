import { useContext } from "react";
import { ProductContext } from "../context/ContextApp";

export const ButtonsCounter = () => {
    const { incrementBy, counter } = useContext(ProductContext);

    return (
        <div className="w-full flex justify-center uppercase">
            <button className="px-[4px] py-[2px] bg-white rounded-l-full" onClick={() => incrementBy(-1)}>-</button>
            <span className="px-[4px] py-[2px] bg-white border">{counter}</span>
            <button className="px-[4px] py-[2px] bg-white rounded-r-full" onClick={() => incrementBy(1)}>+</button>
        </div>
    );
};