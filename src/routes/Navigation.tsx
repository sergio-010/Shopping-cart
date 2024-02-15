import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { ShoppingPage } from "../pattern/pages/ShoppingPage";


export const Navigation = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<ShoppingPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter >
    )
}
