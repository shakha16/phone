import React, { Children } from 'react';
import { Link, Outlet } from "react-router-dom"

function Layout(props) {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;