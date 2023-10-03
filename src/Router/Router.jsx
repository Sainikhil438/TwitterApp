import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../Signin/Signin";
import Dashboard from "../Dashboard/Dashboard";
import DisplayPage from "../Components/DisplayPage";




function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<DisplayPage/>}/>
                    <Route path={"/dashboard"} element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router