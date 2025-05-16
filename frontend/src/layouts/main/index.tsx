import React from "react";

import Header from "../../components/widgets/header";
import SideNavbar from "../../components/widgets/sideNavbar";

interface PropType{
    children: React.ReactNode
}

function Layout({children}: PropType){
    return(
        <main className="min-h-screen bg-[var(--color-primary)]">
            <Header />
            <SideNavbar />
            <div style={{gridArea: "interface-container"}}>
                {children}
            </div>
        </main>
    )
}

export default Layout;