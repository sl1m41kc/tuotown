import { Outlet } from "react-router-dom";
import { Header } from './layout/Header/Header';
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Footer } from './../components/layout/Footer/Footer'

import { useState } from "react";

export function Layout() {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    return (
        <>
            <Sidebar sidebarStatus={sidebarStatus}
                    setSidebarStatus={setSidebarStatus}
            />
            <Header setSidebarStatus={setSidebarStatus}
                    sidebarStatus={sidebarStatus}
            />
            <Outlet />
            <Footer />
        </>
    );
}