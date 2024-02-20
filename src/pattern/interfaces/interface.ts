import { ReactElement } from "react";


export interface Props {
    children?: ReactElement | ReactElement[]
}
export interface shoppingCartProps{
    products: Product[];
    addToCart: (product: Product) => void;
    removeToCart: (product: Product) => void;
    handleUpdateQuantity: (product: Product, quantity: number) => void;
}
export interface Product {
  id: number;
  title?: string;
  price: number;
  description: string;
  category?: Category;
  image?: string;
  rating?: Rating;
  quantity?: number
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}
