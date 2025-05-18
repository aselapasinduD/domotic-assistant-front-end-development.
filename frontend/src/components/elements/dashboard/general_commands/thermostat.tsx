import React, { useState } from "react";

import ToggleButton from "../../toggleButton";

const Thermostat = () => {
    const [isToggle, setToggle] = useState<boolean>(false)

    function onToggleButton(){
        setToggle(!isToggle)
        // TODO: write the code to do to do the work on toggle
    }

    return(
        <div>
            <h4 className="mb-4 text-md font-medium">THERMOSTAT</h4>
            <div className="flex gap-6">
                <div className="flex-1 flex flex-col items-center justify-center border rounded-xl py-4">
                    <span className="text-2xl">25 C</span>
                    <span className="text-2xl">19 C</span>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex [&>button]:text-2xl [&>button]:cursor-pointer [&>button]:border [&>button]:rounded-lg [&>button]:w-9">
                        <button type="button">+</button>
                        <button type="button" className="ml-6">-</button>
                    </div>
                    <div className="flex-1 flex justify-cente items-end">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 w-fit">
                                <ToggleButton isToggle={isToggle} onToggleButtonClick={onToggleButton}/>
                            </div>
                            <p className="text-sm leading-4 w-fit">
                                Automatic regulation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thermostat;