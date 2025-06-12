import { useState } from "react";

import { ToggleButton } from "../../buttons";

const Energy = () => {
    const [isToggleSolar, setToggleSolar] = useState<boolean>(false)
    const [isTogglePower, setTogglePower] = useState<boolean>(false)

    function onToggleSolarButton(){
        setToggleSolar(!isToggleSolar)
        // TODO: write the code to do to do the work on toggle
    }

    function onTogglePowerButton(){
        setTogglePower(!isTogglePower)
        // TODO: write the code to do to do the work on toggle
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex justify-between mb-2">
                <h4 className="text-md font-medium">ENERGY</h4>
                <p className="text-sm">CURRENT CONSUMPTION - 12,4kWh</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Solar panels</p>
                <ToggleButton isToggle={isToggleSolar} onToggleButtonClick={onToggleSolarButton} />
            </div>
            <div className="flex justify-between items-center">
                <p>Power reserve</p>
                <ToggleButton isToggle={isTogglePower} onToggleButtonClick={onTogglePowerButton}/>
            </div>
        </div>
    )
}

export default Energy;