import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import {MainPage} from "./pages/Main.jsx";
import {BasketPage} from "./pages/Busket.jsx";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/busket"} element={<BasketPage/>}/>
            </Route>
        </Routes>

    );
};

export default App;