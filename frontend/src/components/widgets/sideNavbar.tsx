import React, { useEffect, useState } from "react";

import type { ListOfInterfaces } from "../../@common/types";

import SideNavbarButton from "../elements/sideNavbarButton";
import { DashboardIcon, SettingIcon, LockIcon } from "../../assets/icons/icons";

interface SideNavbarProps{
    setWhichInterface: React.Dispatch<React.SetStateAction<ListOfInterfaces>>
}

const SideNavbar = ({setWhichInterface}: SideNavbarProps) => {
    const [isChecked, setIsChecked] = useState<ListOfInterfaces>("dashboard");

    useEffect(() => {
        setWhichInterface(isChecked)
    }, [isChecked]);
    
    return(
        <div className="flex flex-col gap-6 items-center w-14 sm:w-20 border-r border-[var(--main-layout-border-color)] px-2 py-6" style={{gridArea: "side-navbar"}}>
            <SideNavbarButton btnId="dashboard" icon={<DashboardIcon size={26} />} isChecked={isChecked} setIsChecked={setIsChecked} />
            <SideNavbarButton btnId="lock" icon={<LockIcon size={26} />} isChecked={isChecked} setIsChecked={setIsChecked} />
            <SideNavbarButton btnId="settings" icon={<SettingIcon size={26} />} isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
    )
}

export default SideNavbar;