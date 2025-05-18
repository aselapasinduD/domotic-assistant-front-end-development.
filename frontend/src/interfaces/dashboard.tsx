import React, {useState} from "react";

import DashboardLayout from "../layouts/dashboard";
import DeviceTile from "../components/elements/dashboard/deviceTile";
import SubDeviceTile from "../components/elements/dashboard/subDeviceTile";
import GeneralCommands from "../components/widgets/dashboard/generalCommands";
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
        name: "CCTVIcon",
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

/**
 * Dashboard Interface for Domotic Assitant
 * 
 * @returns JSX elements
 * @since 1.0.0
 */
function Dashboard(){
    const [isSelectedDevice, setSelectedDevice] = useState<string>(listOfDevices[0].id);
    const [isSelectedSubDevice, setSelectedSubDevice] = useState<string[]>([listOfSubDevices[0].id, listOfSubDevices[3].id, listOfSubDevices[5].id]);
    
    return(
        <DashboardLayout>
            <div className="flex flex-col h-full" style={{gridArea: "controls"}}>
                <div className="py-10">
                    <h1 className="text-4xl text-[var(--color-white)]">Domotic Assistant</h1>
                </div>
                <div className="flex-1 flex gap-10">
                    <div className="flex flex-col gap-4 w-[25%] h-[95%] bg-[var(--dashboard-background)] rounded-lg p-5">
                        <h3 className="text-md font-normal text-[var(--color-white)]">DEVICES</h3>
                        {listOfDevices.map((device) => {
                            return(
                                <DeviceTile key={device.id} device={device} isSelected={isSelectedDevice} setSelectedDevice={setSelectedDevice} />
                            )
                        })}
                    </div>
                    <div className="flex flex-col relative h-[95%] border border-[var(--main-layout-border-color)] rounded-lg p-6">
                        <h3 className="text-md font-normal mb-6 text-[var(--color-white)]">HOUSE EXTERIOR DEVICES</h3>
                        <div className="flex-1 flex flex-wrap gap-6 justify-center">
                            {listOfSubDevices.map((subDevice) => {
                                return(
                                    <SubDeviceTile key={subDevice.id} device={subDevice} isSelected={isSelectedSubDevice} setSelectedDevice={setSelectedSubDevice} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-100 bg-[var(--dashboard-background)] px-8 py-6" style={{gridArea: "aside"}}>
                <GeneralCommands />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;