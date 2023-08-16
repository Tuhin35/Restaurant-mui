import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import ErrorPage from '../page/ErrorPage';
import Home from '../page/Home'
import About from '../page/About';
import Menu from '../page/Menu';
import Contact from '../page/Contact';
const router = createBrowserRouter([
{
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
    ]
}
]) 

export default router;