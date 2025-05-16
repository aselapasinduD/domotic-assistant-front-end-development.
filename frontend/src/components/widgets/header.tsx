import React from "react";

import InputSearch from "../elements/inputSearch";
import _defaultProfilePicture from "../../assets/images/profile-picture.jpg";

/**
 * SPA Header Bar
 * 
 * @returns JSX elements
 * @since 1.0.0
 */
const Header = () => {
    return(
        <div className="w-full h-18 [&>div]:h-18 flex [&>div]:flex [&>div]:items-center border-b border-[var(--main-layout-border-color)] text-[var(--header-text-color)]" style={{gridArea: "header"}}>
            <div className="w-18 border-r border-[var(--main-layout-border-color)] justify-center">
                <div className="text-3xl">
                    <span className="font-semibold text-[var(--color-secondary)]">G</span>
                    <span>S</span>
                </div>
            </div>
            <div className="flex-1 px-4 md:px-8">
                <InputSearch />
            </div>
            <div className="pr-4 lg:px-10">
                <img className="w-[45px] rounded-full overflow-hidden" src={_defaultProfilePicture} alt="Default Proifle Picture" />
            </div>
        </div>
    )
}

export default Header;