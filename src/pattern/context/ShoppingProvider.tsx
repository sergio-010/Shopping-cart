import React from 'react'
import { useProduct } from '../hooks/useProduct';
import { ShoppingContext } from './ShoppingContext';
import salchicha from '../assets/salchicha.jpg'


export const ShoppingProvider = ({ children }: { children: React.ReactNode }) => {
    const { counter, incrementBy } = useProduct();

    const contextValues = {
        products: [
            {
                id: '1',
                title: 'Salchicha',
                img: salchicha
            }
        ],
        counter,
        incrementBy,
    }
    return (
        <ShoppingContext.Provider value={{ ...contextValues }}>
            {children}
        </ShoppingContext.Provider>
    )
}