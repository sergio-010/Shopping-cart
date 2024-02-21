import { productsApi } from "../api/product";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/interface";

const getProductDetail = async ( id? : string): Promise<Product> => {
  const { data } = await productsApi.get(`/products/${id}`);
  return data;
};
export const useGetProduct = ( id?: string)  => {
  const productQuery = useQuery({
    queryKey: ['cloth'],
    queryFn: () => getProductDetail(id),
  });

  return {
    productQuery,
  };
};
