import React, { useState } from "react";
import SideNavbarButton from "../elements/sideNavbarButton";
import { DashboardIcon, SettingIcon, LockIcon } from "../../assets/icons/icons";

const SideNavbar = () => {
    const [isChecked, setIsChecked] = useState<string>("dashboard");
    
    return(
        <div className="flex flex-col gap-2 items-center w-18 border-r border-[var(--main-layout-border-color)] px-2 py-4" style={{gridArea: "side-navbar"}}>
            <SideNavbarButton btnId="dashboard" icon={<DashboardIcon />} isChecked={isChecked} setIsChecked={setIsChecked} />
            <SideNavbarButton btnId="lock" icon={<LockIcon />} isChecked={isChecked} setIsChecked={setIsChecked} />
            <SideNavbarButton btnId="setting" icon={<SettingIcon />} isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
    )
}

export default SideNavbar;