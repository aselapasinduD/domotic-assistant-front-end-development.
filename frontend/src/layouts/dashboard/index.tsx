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
        <div className="dashboard-interface relative h-full gap-4 sm:gap-10 pl-4 sm:pl-8 overflow-hidden">
            {children}
        </div>
    )
}

export default DashboardLayout;