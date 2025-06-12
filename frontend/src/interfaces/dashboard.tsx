import React, {useState} from "react";

import DashboardLayout from "../layouts/dashboard";
import DeviceTile from "../components/elements/dashboard/deviceTile";
import SubDeviceTile from "../components/elements/dashboard/subDeviceTile";
import GeneralCommands from "../components/widgets/dashboard/generalCommands";
import { AddDeviceButton } from "../components/elements/buttons";
import type { DeviceStruc, SubDevicesStruc } from "../@common/types";

import {
    HouseExteriorIcon,
    LightIcon,
    CCTVIcon,
    RouterIcon,
    HomeAppliancesIcon,
    AirConditioningIcon,
    CanopiesIcon,
    GarageIcon
} from "../assets/icons/icons";

const listOfDevices: DeviceStruc[] = [
    {
        id: 'device-1',
        name: "House Exterior",
        icon: <HouseExteriorIcon />
    },
    {
        id: 'device-2',
        name: "Lights",
        icon: <LightIcon />
    },
    {
        id: 'device-3',
        name: "CCTV",
        icon: <CCTVIcon />
    },
    {
        id: 'device-4',
        name: "Router",
        icon: <RouterIcon />
    },
    {
        id: 'device-5',
        name: "Home Appliances",
        icon: <HomeAppliancesIcon />
    },
    {
        id: 'device-6',
        name: "Air Conditioning",
        icon: <AirConditioningIcon />
    }
]

const listOfSubDevices: SubDevicesStruc[] = [
    {
        id: "cctv-device-1",
        name: "Entrance Camera",
        icon: <CCTVIcon />,
        status: "Active"
    },
    {
        id: "cctv-device-2",
        name: "Stairs Camera",
        icon: <CCTVIcon />,
        status: "Deactivated at 22:47"
    },
    {
        id: "canopies-device-1",
        name: "Canopies",
        icon: <CanopiesIcon />,
        status: "Deactivated at 21:00"
    },
    {
        id: "garage-device-1",
        name: "Garage Door",
        icon: <GarageIcon />,
        status: "Deactivated at 23:51"
    },
    {
        id: "parasols-device-1",
        name: "Parasols",
        icon: <CanopiesIcon />,
        status: "Deactivated at 21:00"
    },
    {
        id: "lights-device-1",
        name: "Garden Lights",
        icon: <CanopiesIcon />,
        status: "Active"
    },
]

interface CustomStyle extends React.CSSProperties{
    "--expand-general-commands-tanslate": string;
     "--expand-general-commands-tanslate-mobile": string;
}

/**
 * Dashboard Interface for Domotic Assitant
 * 
 * @returns JSX elements
 * @since 1.0.0
 */
function Dashboard(){
    const [isSelectedDevice, setSelectedDevice] = useState<string>(listOfDevices[0].id);
    const [isSelectedSubDevice, setSelectedSubDevice] = useState<string[]>([listOfSubDevices[0].id, listOfSubDevices[3].id, listOfSubDevices[5].id]);
    const [isGeneralCommandsExpand, setGeneralCommandExpand] = useState<boolean>(false)

    const style: CustomStyle = {
        "--expand-general-commands-tanslate": isGeneralCommandsExpand? "calc(0.25rem * 100)" : "calc(0.25rem * 8)",
        "--expand-general-commands-tanslate-mobile": isGeneralCommandsExpand? "calc(100vw - (var(--spacing) * 14))" : "calc(0.25rem * 8)",
    }
    
    return(
        <DashboardLayout>
            <div className="flex flex-col h-full" style={{gridArea: "controls"}}>
                <div className="py-4 sm:py-10 flex gap-4">
                    <h1 className="text-2xl sm:text-4xl text-[var(--color-white)]">Domotic Assistant</h1>
                    <AddDeviceButton />
                </div>
                <div className="flex-1 flex flex-col max-w-[76vw] sm:max-w-auto max-h-[100vh] sm:max-h-auto sm:flex-row gap-4 sm:gap-10 [&>div]:flex [&>div]:flex-col">
                    <div className="sm:w-fit 2xl:w-auto 2xl:flex-1 gap-1 sm:gap-4 sm:w-[25%] sm:h-[95%] bg-[var(--dashboard-background)] rounded-lg p-2 sm:p-5">
                        <h3 className="text-md font-normal text-center 2xl:text-left text-[var(--color-white)]">DEVICES</h3>
                        <div className="overflow-x-scroll sm:overflow-x-none ">
                            <div className="flex flex-row sm:flex-col gap-2 mb-2 sm:mb-auto sm:gap-4">
                                {listOfDevices.map((device) => {
                                    return(
                                        <DeviceTile key={device.id} device={device} isSelected={isSelectedDevice} setSelectedDevice={setSelectedDevice} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex-2 relative h-[50vh] sm:h-[95%] mb-4 sm:mb-auto border border-[var(--main-layout-border-color)] rounded-lg p-2 sm:p-6">
                        <h3 className="text-md font-normal text-center sm:text-left my-3 sm:my-auto sm:mb-6 text-[var(--color-white)]">HOUSE EXTERIOR DEVICES</h3>
                        <div className="flex-1 relative overflow-y-scroll">
                            <div className="flex-1 flex flex-wrap gap-6 justify-center m-1">
                                {listOfSubDevices.map((subDevice) => {
                                    return(
                                        <SubDeviceTile key={subDevice.id} device={subDevice} isSelected={isSelectedSubDevice} setSelectedDevice={setSelectedSubDevice} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex h-full w-[calc(100vw-(var(--spacing)*14))] sm:w-100 ${isGeneralCommandsExpand? "bg-[var(--dashboard-background)]" : ""} sm:bg-[var(--dashboard-background)] lg:pl-8 lg:pr-2 sm:py-6 absolute lg:static -translate-x-[var(--expand-general-commands-tanslate-mobile)] sm:-translate-x-[var(--expand-general-commands-tanslate)] lg:-translate-x-0 duration-300 ease-in`} style={{gridArea: "aside", ...style}}>
                <button type="button" title="Expand General Commands" className="w-8 max-h-14 sm:max-h-none sm:h-full lg:hidden bg-[var(--dashboard-background)] rounded-l-xl text-2xl text-[var(--main-layout-border-color)] px-1" onClick={() => setGeneralCommandExpand(!isGeneralCommandsExpand)}>
                    {isGeneralCommandsExpand ? (
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                        <path d="M7 5L13 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                        <path d="M13 5L7 10L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </button>
                <div className={`flex-1 flex max-h-[100vh] sm:max-h-[86vh] lg:opacity-100 ${isGeneralCommandsExpand ? "opacity-100" : "opacity-0"} duration-300 ease-in`}>
                    <GeneralCommands />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;