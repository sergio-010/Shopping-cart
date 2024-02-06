import { productsApi } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { Products } from "../interfaces/interface";

const getClothes = async (): Promise<Products[]> => {
  try {
    const { data } = await productsApi.get<Products[]>("https://fakestoreapi.com/products");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching clothes data:", error);
    throw error;
  }
};

export const useProductos = () => {
  const productsQuery = useQuery({
  queryKey: ['clothes'],
  queryFn: getClothes,
  initialData: [],
});

  return {
    productsQuery,
  };
};
