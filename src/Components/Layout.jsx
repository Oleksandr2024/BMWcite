import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />  {/* navbar is always shown */}
            <Outlet/>   {/* Outlet - our rest components. Children routes */}
            <Footer />  {/* footer is always shown */}       
        </>
    )
}

export {Layout}