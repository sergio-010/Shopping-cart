import { useEffect, useState } from "react";
import { clothesApi } from "../api/userApi";

export interface Clothes {
  id?: number;
  name?: string;
  title: string;
  price: number;
  images: string[] ;
  category?: string;
  description?: string;
}


export const useProducts = () => {
  const [clothes, setClothes] = useState<Clothes[]>([]);

  useEffect(() => {
    getClothes();
  }, []);

  const getClothes = async () => {
    try {
      const res = await clothesApi.get<Clothes[]>(
        "https://api.escuelajs.co/api/v1/products"
      );
      setClothes(res.data);
    } catch (error) {
      console.error("Error buscando Prendas", error);
    }
  };

  return {
    clothes,
  };
};
