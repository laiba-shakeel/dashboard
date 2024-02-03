import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Add_Products from '../Pages/Add_Products'
import Catagories from "../Pages/Catagories";
const router = createBrowserRouter(
    createRoutesFromElements(
        // <Route>
        //   <Route path="" element={<Private_Routes />}>
        //     {/* These childerns are Outlet------ */}
        //     <Route path="" element={<Dashboard />} />
        //     <Route path="/account" element={<Dashboard />} />
        //     <Route path="/products" element={<Dashboard />} />
        //     {/* Outlet end------ */}
        //   </Route>

        //   <Route path="" element={<Public_Routes />}>
        //     <Route path="login" element={<Login />} />
        //     {/* <Route path="register" element={<Register />} /> */}
        //   </Route>
        // </Route>

        // Dynamic routing 

        // <Route>
        //   <Route path="" element={<Dashboard />} />
        //   <Route path="/items/:id" element={<Product_Details />} />
        // </Route>

        // Dynamic routing 

        //  Nested Routing 
        <Route>
            <Route path="login" element={<Login />} />
            <Route path="dashboard">
                <Route path="" element={<Dashboard />} />
                <Route path="products" element={<Product />} />
                <Route path="add-product" element={<Add_Products />} />
                <Route path="catagories" element={<Catagories />} />
            </Route>
        </Route>
        // Nested routing finshed here
    )
);

export const Router_App = () => {
    return <RouterProvider router={router} />;
};