import { ReactElement } from "react";


export interface Props {
    children?: ReactElement | ReactElement[]
}
export interface ShoppingContextProps{
    counter: number
    incrementBy: (value: number) => void
}
export interface Products {
  id: number;
  title?: string;
  price: number;
  description: string;
  category?: Category;
  image?: string;
  rating?: Rating;
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
