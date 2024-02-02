import { createContext } from 'react';
import { ProductContextProps } from '../interfaces/interface';
import { useProduct } from '../hooks/useProduct';


export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ContextApp = ({ children }: { children: React.ReactNode }) => {
    const { counter, incrementBy } = useProduct();

    const contextValues = {
        product: {
            id: '1',
            title: 'Coffee Mug',
            img: './coffee-mug.png'
        },
        counter,
        incrementBy,
    }


    return (
        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    )
}


