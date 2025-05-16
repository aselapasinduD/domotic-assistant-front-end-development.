import React, {useState} from "react";

interface ButtonProps {
    icon: React.ReactNode
    btnId: string;
    isChecked: string;
    setIsChecked: React.Dispatch<React.SetStateAction<string>>;
}

const SideNavbarButton: React.FC<ButtonProps> = ({btnId, icon, isChecked, setIsChecked}) => {
    const _isChecked = isChecked === btnId

    return(
        <button type="button" className={`p-2 w-fit h-fit rounded-lg [&>svg]:text-[var(${_isChecked ? "--side-navbar-selected-btn-background" : "--side-navbar-default-icon-color" })] ${_isChecked ? "bg-[var(--side-navbar-selected-btn-background)]" : ""}`} onClick={() => setIsChecked(btnId)}>
            {icon}
        </button>
    )
}

export default SideNavbarButton;