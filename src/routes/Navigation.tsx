import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { ShoppingPage } from "../pattern/pages/ShoppingPage";
import { Pokemons } from "../pattern/pages/Pokemons";

export const Navigation = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<ShoppingPage />} />
                <Route path="/pokemons" element={<Pokemons />} />
                <Route path="/users" element={<h1>Users</h1>} />
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter >
    )
}
