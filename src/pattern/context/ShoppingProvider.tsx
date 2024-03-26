import React, { useState } from 'react'
import { Product, shoppingCartProps } from '../interfaces/interface';
import { ShoppingCartContext } from './ShoppingContext';

const initialValues: shoppingCartProps = {
    addToCart: () => { },
    removeToCart: () => { },
    handleUpdateQuantity: () => { },
    products: [],
    addFavorite: () => { },
    removeFavorite: () => { },
    favorites: []

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
    const handleUpdateQuantity = (product: Product, quantity: number) => {
        const newProducts = shoppingCart.products.map((item) => {
            if (item.id === product.id) return { ...item, quantity }
            return item
        })
        setshoppingCart({ ...shoppingCart, products: newProducts })
    }

    const addFavorite = (favorite: Product) => {
        if (shoppingCart.favorites.some((item) => item.id === favorite.id)) return;
        const newFavorites = [...shoppingCart.favorites, favorite];
        setshoppingCart({ ...shoppingCart, favorites: newFavorites });
    };

    const removeFavorite = (favorite: Product) => {
        const newFavorites = shoppingCart.favorites.filter((item) => item.id !== favorite.id);
        setshoppingCart({ ...shoppingCart, favorites: newFavorites });
    };

    return (
        <ShoppingCartContext.Provider value={{ ...shoppingCart, addToCart, removeToCart, handleUpdateQuantity, addFavorite, removeFavorite }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}