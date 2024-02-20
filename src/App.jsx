import React from 'react';
import Home from './components/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About.jsx';
import Login from './components/Login/Login.jsx';
import Project from './components/Projects/Project.jsx';
import Signup from './components/Signup/Signup.jsx';
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Home /></>
        },
        {
            path: '/about',
            element: <><About /></>
        },
        {
            path: '/login',
            element: <><Login /></>
        },
        {
            path: '/project',
            element: <><Project /></>
        },
        {
            path: '/signup',
            element: <><Signup /></>
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;