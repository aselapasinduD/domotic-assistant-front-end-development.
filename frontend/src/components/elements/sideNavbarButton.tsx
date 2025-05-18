import React from "react";

import type { ListOfInterfaces } from "../../@common/types";

import toCascadeCase from "../../@common/toCascadeCase";

interface ButtonProps {
    icon: React.ReactNode
    btnId: ListOfInterfaces;
    isChecked: ListOfInterfaces;
    setIsChecked: React.Dispatch<React.SetStateAction<ListOfInterfaces>>;
}

interface CustomStyle extends React.CSSProperties{
    "--icon-color": string
    "--btn-background": string
}

/**
 * Side Navigation Bar for SPA
 * 
 * @param icon - Icon for the navigation side bar
 * @param btnId - Unique Button ID
 * @param isChecked - Current Selected side bar button ID
 * @param setIsChecked - function to set the current selected side bar button ID
 * @returns JSX element
 * @since 1.0.0
 */
const SideNavbarButton: React.FC<ButtonProps> = ({btnId, icon, isChecked, setIsChecked}) => {
    const _isChecked = isChecked === btnId
    const style: CustomStyle = {
        "--icon-color": _isChecked ? "var(--side-navbar-background)" : "var(--side-navbar-default-btn-icon-color)",
        "--btn-background": _isChecked ? "var(--side-navbar-selected-btn-background)" : ""
    }
    return(
        <button type="button" title={toCascadeCase(btnId)} className="p-2 w-fit h-fit rounded-lg [&>svg]:text-[var(--icon-color)] bg-[var(--btn-background)] cursor-pointer" style={style} onClick={() => setIsChecked(btnId)}>
            {icon}
        </button>
    )
}

export default SideNavbarButton;