import React from "react"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Navbar />
                <div>
                    {children}
                </div>
            <Footer />
        </>
    )

}

export default Layout