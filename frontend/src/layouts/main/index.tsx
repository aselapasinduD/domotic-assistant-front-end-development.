import React from "react";

interface PropType{
    children: React.ReactNode
}

function Layout({children}: PropType){
    return(
        <main className="min-h-screen bg-[var(--color-primary)] py-6 flex flex-col justify-center sm:py-12">
            {children}
        </main>
    )
}

export default Layout;