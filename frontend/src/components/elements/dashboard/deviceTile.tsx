import React from "react";

import type { DeviceStruc } from "../../../@common/types";

interface DeviceTileProps{
    device: DeviceStruc;
    isSelected: string;
    setSelectedDevice: React.Dispatch<React.SetStateAction<string>>;
}

interface CustomStyle extends React.CSSProperties{
    "--icon-color-text": string;
    "--tile-background": string;
    "--border-color": string;
    "--border-size": string;
}

/**
 * DeviceTile for dashboard
 * 
 * @param device - Object of device.
 * @param isSelected - Current selected Device Tile ID
 * @param setSelectedDevice - function to set the current selected Device Tile ID
 * @returns JSX element
 */
const DeviceTile: React.FC<DeviceTileProps> = ({device, isSelected, setSelectedDevice}) => {
    const {id, icon, name} = device
    const _isChecked = isSelected === id
    const style: CustomStyle = {
        "--icon-color-text": _isChecked ? "var(--device-tile-background)" : "var(--device-tile-icon-text-color)",
        "--tile-background": _isChecked ? "var(--device-tile-selected-background)" : "",
        "--border-color": !_isChecked ? "var(--device-tile-border-color)" : "",
        "--border-size": !_isChecked ? "1px" : "0"
    }

    return(
        <div className="flex items-center w-fit 2xl:w-auto 2xl:min-w-[240px] [&_*]:text-[var(--icon-color-text)] border-(length:--border-size) border-[var(--border-color)] bg-[var(--tile-background)] rounded-lg px-5 py-4 cursor-pointer select-none" style={style} onClick={() => setSelectedDevice(id)}>
            <span>{icon}</span>
            <p className="ml-6 h-fit hidden 2xl:block">{name}</p>
        </div>
    )
}

export default DeviceTile;