import React from "react";
import type { SubDevicesStruc } from "../../../@common/types";

interface SubDeviceTileProps{
    device: SubDevicesStruc;
    isSelected: string[];
    setSelectedDevice: React.Dispatch<React.SetStateAction<string[]>>;
}

interface CustomStyle extends React.CSSProperties{
    "--icon-color-text": string;
    "--border-color": string;
    "--border-size": string;
}

/**
 * SubDeviceTile for dashboard
 * 
 * @param device - Object of device.
 * @param isSelected - Current selected Device Tile ID
 * @param setSelectedSubDevice - function to set the current selected Device Tile ID
 * @returns JSX element
 */
const SubDeviceTile: React.FC<SubDeviceTileProps> = ({ device, isSelected, setSelectedDevice}) => {
    const {id, icon, name, status} = device;

    const _isChecked = isSelected.some((selectedID) => selectedID == id);

    const style: CustomStyle = {
        "--icon-color-text": _isChecked ? "var(--sub-device-tile-selected-icon-text)" : "var(--device-tile-icon-text-color)",
        "--border-color": _isChecked ? "var(--sub-device-tile-selected-border)" : "var(--device-tile-border-color)",
        "--border-size": _isChecked ? "3px" : "1px",
    }

    function handleSelected(){
        setSelectedDevice((prevID) => {
            if (!_isChecked) {
                return [id, ...prevID];
            } else {
                return prevID.filter((subDeviceID) => subDeviceID !== id);
            }
        });
    }

    return(
        <div className="flex flex-col items-center gap-2 justify-center min-w-[240px] max-h-[300px] [&_*]:text-[var(--icon-color-text)] border-(length:--border-size) border-[var(--border-color)] rounded-3xl px-5 py-6 cursor-pointer select-none" style={style} onClick={handleSelected}>
            <span>{icon}</span>
            <p className="h-fit text-lg">{name}</p>
            <p className="font-thin text-sm">{status}</p>
        </div>
    )
}

export default SubDeviceTile;