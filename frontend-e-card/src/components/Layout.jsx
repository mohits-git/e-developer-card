import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from '@vercel/analytics/react';

export default function Layout() {
    return (
        <>
        <Analytics />
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
