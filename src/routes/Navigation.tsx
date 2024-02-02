import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { ShoppingPage } from "../pattern/pages/ShoppingPage";

export const Navigation = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<ShoppingPage />} />
                <Route path="/about" element={<h1 className="text-3xl text-slate-500">About</h1>} />
                <Route path="/users" element={<h1>Users</h1>} />
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter >
    )
}
