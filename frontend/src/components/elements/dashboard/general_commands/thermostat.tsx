import { useState } from "react";

import { ToggleButton } from "../../buttons";

const Thermostat = () => {
    const [isToggle, setToggle] = useState<boolean>(false)
    const [thermostatValue, setThermostatValue] = useState<number>(25);

    function onToggleButton(){
        setToggle(!isToggle)
        // TODO: write the code to do to do the work on toggle
    }

    return(
        <div>
            <h4 className="mb-4 text-md font-medium">THERMOSTAT</h4>
            <div className="flex gap-6">
                <div className="flex-1 flex flex-col items-center justify-center border rounded-xl py-4">
                    <span className="text-2xl">{thermostatValue} C</span>
                    <span className="text-2xl">19 C</span>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex [&>button]:text-2xl [&>button]:cursor-pointer [&>button]:border [&>button]:rounded-lg [&>button]:w-9 [&>button]:hover:border-[var(--thermostat-btn-hover-color)] [&>button]:hover:text-[var(--thermostat-btn-hover-color)] [&>button]:active:ring-2">
                        <button type="button" onClick={() => setThermostatValue((prevValue) => prevValue != 100 ? prevValue + 1 : prevValue)}>+</button>
                        <button type="button" className="ml-6" onClick={() => setThermostatValue((prevValue) => prevValue != 1 ? prevValue - 1 : prevValue)}>-</button>
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