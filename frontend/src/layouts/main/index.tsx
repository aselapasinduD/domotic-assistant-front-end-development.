import React from "react";

import type { ListOfInterfaces } from "../../@common/types";

import Header from "../../components/widgets/header";
import SideNavbar from "../../components/widgets/sideNavbar";

interface PropType{
    children: React.ReactNode;
    setWhichInterface: React.Dispatch<React.SetStateAction<ListOfInterfaces>>
}

/**
 * Main layout of the SPA
 * 
 * @param children - Interfaces of the SPA
 * @param setWhichInterface - Callback function for switch between defferent interfaces
 * @returns JSX element
 * @since 1.0.0
 */
function Layout({children, setWhichInterface}: PropType){
    return(
        <main className="min-h-screen bg-[var(--color-primary)]">
            <Header />
            <SideNavbar setWhichInterface={setWhichInterface} />
            <div style={{gridArea: "interface-container"}}>
                {children}
            </div>
        </main>
    )
}

export default Layout;