import { useState } from "react";
import { productsApi } from "../api/products";
import { useQuery } from "@tanstack/react-query";


export interface Clothes {
  id?: number;
  name?: string;
  title: string;
  price: number;
  image? : string;
}

export const useProducts = () => {
  const [clothes, setClothes] = useState<Clothes[]>([]);

  const getClothes = async () => {
    try {
      const { data} = await productsApi.get<Clothes[]>(
        "https://fakestoreapi.com/products"
        );
        setClothes(data);
      } catch (error) {
        console.error("Error buscando los productos", error);
      }
    };
   
 const products = useQuery<Clothes[], Error>(
  ["productos"],
  getClothes,
  {
    onError: (error: Error) => {
      console.error("Error in useQuery", error);
    },
  }
) as { data?: Clothes[]; isLoading: boolean; isError: boolean };


 
  return {
    clothes,
    isLoading: products.isLoading,
    isError: products.isError,

  };
};
