import React from "react";

import toCascadeCase from "../../@common/toCascadeCase";

interface ButtonProps {
    icon: React.ReactNode
    btnId: string;
    isChecked: string;
    setIsChecked: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Side Navigation Bar for SPA
 * 
 * @param icon - Icon for the navigation side bar
 * @param btnId - Unique Button ID
 * @param isChecked - Current Selected side bar button ID
 * @param setIsChecked - function to set the current selected side bar button ID
 * @returns JSX element
 */
const SideNavbarButton: React.FC<ButtonProps> = ({btnId, icon, isChecked, setIsChecked}) => {
    const _isChecked = isChecked === btnId
    return(
        <button type="button" title={toCascadeCase(btnId)} className={`p-2 w-fit h-fit rounded-lg [&>svg]:text-[var(${_isChecked ? "--side-navbar-background" : "--side-navbar-default-btn-icon-color" })] ${_isChecked ? "bg-[var(--side-navbar-selected-btn-background)]" : ""}`} onClick={() => setIsChecked(btnId)}>
            {icon}
        </button>
    )
}

export default SideNavbarButton;