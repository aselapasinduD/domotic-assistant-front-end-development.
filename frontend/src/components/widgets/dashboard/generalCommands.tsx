import Thermostat from "../../elements/dashboard/general_commands/thermostat";
import Energy from "../../elements/dashboard/general_commands/energy";
import Stays from "../../elements/dashboard/general_commands/stays";

const GeneralCommands = () => {
    return(
        <div className="flex-1 relative overflow-y-scroll pr-4">
            <div className="flex-1 flex flex-col gap-5 text-[var(--thermostat-default-text-color)]">
                <h3 className="text-xl font-light text-[var(--color-white)]">GENERAL COMMANDS</h3>
                <span className="line inline-block w-full h-[1px] bg-[var(--main-layout-border-color)]"></span>
                <Thermostat />
                <span className="line inline-block w-full h-[1px] bg-[var(--main-layout-border-color)] my-4"></span>
                <Energy />
                <span className="line inline-block w-full h-[1px] bg-[var(--main-layout-border-color)] my-4"></span>
                <Stays />
            </div>
        </div>
    )
}

export default GeneralCommands;