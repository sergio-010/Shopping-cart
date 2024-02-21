import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { ShoppingPage } from "../pattern/pages/ShoppingPage";
import { LayoutRoot } from "../pattern/components/LayoutRoot";
import { CardProduct } from "../pattern/pages/CardProduct";



export const Navigation = () => {
    return (
        <BrowserRouter>
            <LayoutRoot>
                <Routes>
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path={`/product/:id`} element={<CardProduct />} />
                </Routes>
            </LayoutRoot>
        </BrowserRouter >
    )
}
