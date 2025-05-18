import React from "react";

interface PropType{
    children: React.ReactNode
}
/**
 * Layout for the dashboard interface
 * 
 * @param children - Child elements that provided in dashboard.
 * @returns JSX element
 * @since 1.0.0
 */
function DashboardLayout({children}: PropType){
    return(
        <div className="dashboard-interface h-full gap-10 pl-8">
            {children}
        </div>
    )
}

export default DashboardLayout;