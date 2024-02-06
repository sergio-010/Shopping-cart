import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { ShoppingPage } from "../pattern/pages/ShoppingPage";


export const Navigation = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<ShoppingPage />} />
                <Route path="/pokemons" element={<h1>Pokemons</h1>} />
                <Route path="/users" element={<h1>Users</h1>} />
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter >
    )
}
