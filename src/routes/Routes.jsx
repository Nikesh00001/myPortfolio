import React from "react";
import { Children } from "react";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Message from "../components/Message/Message";

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
                element: <Message/>,
            },
        ]



    }
]
export default Routes;