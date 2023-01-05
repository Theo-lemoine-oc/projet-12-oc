import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";


export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}