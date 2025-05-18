import React, { useEffect, useState } from "react";

import UserModel from "../../models/userModel";

import Header from "../../components/widgets/header";
import SideNavbar from "../../components/widgets/sideNavbar";

import Login from "../../pages/login";

interface PropType{
    children: React.ReactNode
}
/**
 * Main Layout of the SPA
 * 
 * @param children - Interface of each tabs
 * @returns JSX element
 */
function Layout({children}: PropType){
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsAuthenticated(UserModel.checkUserCredential())
        setIsLoading(true)
    }, [])

    if (!isAuthenticated && isLoading) {
        return <Login />;
    }

    return(
        <main className="min-h-screen bg-[var(--primary-background)]">
            <Header />
            <SideNavbar />
            <div className="relative" style={{gridArea: "interface-container"}}>
                {children}
            </div>
        </main>
    )
}

export default Layout;