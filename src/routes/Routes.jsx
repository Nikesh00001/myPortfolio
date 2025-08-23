import React from "react";
import { Children } from "react";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Message from "../components/message";

const Routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "message",  
                element: <Message />,
            },
        ]



    }
]
export default Routes;