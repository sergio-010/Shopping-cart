import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductos } from "./useProductos";

export const useFilteredProducts = () => {
    const [searchParams] = useSearchParams();
    const { productsQuery } = useProductos();

    const filterData = useMemo(() => {
        const query = searchParams.get('category');
        console.log(query)
        if (query) {
            return productsQuery.data.filter((product) => product.category === query);
        }
        return productsQuery.data;
    }, [productsQuery.data, searchParams]);

    return {
        filterData
    };
};
