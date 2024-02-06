import { productsApi } from "../api/product";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/interface";

const getClothes = async (): Promise<Product[]> => {
  const { data } = await productsApi.get("/products");
  return data;
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
