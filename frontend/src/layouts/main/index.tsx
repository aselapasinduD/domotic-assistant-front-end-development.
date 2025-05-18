import React, { useEffect, useState } from "react";

import UserModel from "../../models/userModel";

import type { ListOfInterfaces } from "../../@common/types";

import Header from "../../components/widgets/header";
import SideNavbar from "../../components/widgets/sideNavbar";

import Login from "../../pages/login";

interface PropType{
    children: React.ReactNode;
    setWhichInterface: React.Dispatch<React.SetStateAction<ListOfInterfaces>>
}

/**
 * Main Layout of the SPA
 * 
 * @param children - Interface of each tabs
 * @returns JSX element
 */
function Layout({children, setWhichInterface}: PropType){
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsAuthenticated(UserModel.checkUserCredential())
        setIsLoading(true)
    }, [])

    if (!isAuthenticated && isLoading) {
        return <Login />;
    }
    if (!isLoading){
        return <main className="min-h-screen bg-[var(--primary-background)]"></main>
    }
    return(
        <main className="min-h-screen bg-[var(--primary-background)]">
            <Header />
            <SideNavbar setWhichInterface={setWhichInterface} />
            <div style={{gridArea: "interface-container"}}>
                {children}
            </div>
        </main>
    )
}

export default Layout;