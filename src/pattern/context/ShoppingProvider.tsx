import React, { useState } from 'react'
import { Product, shoppingCartProps } from '../interfaces/interface';
import { ShoppingCartContext } from './ShoppingContext';

const initialValues: shoppingCartProps = {
    addToCart: () => { },
    removeToCart: () => { },
    products: []
}


export const ShoppingProvider = ({ children }: { children: React.ReactNode }) => {
    const [shoppingCart, setshoppingCart] = useState(initialValues)
    const addToCart = (product: Product) => {
        const existProduct = shoppingCart.products.find((item) => item.id === product.id)
        if (existProduct) return
        const newProduct = { ...product, quantity: 1 }
        const newProducts = [...shoppingCart.products, newProduct]
        setshoppingCart({ ...shoppingCart, products: newProducts })
    }
    const removeToCart = (product: Product) => {
        const newProducts = shoppingCart.products.filter((item) => item.id !== product.id)
        setshoppingCart({ ...shoppingCart, products: newProducts })
    }

    return (
        <ShoppingCartContext.Provider value={{ ...shoppingCart, addToCart, removeToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}