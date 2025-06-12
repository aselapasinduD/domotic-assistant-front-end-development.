import React from "react";

const Button = () => {
    return(
        <button className="text-md flex justify-center items-center gap-1 bg-[var(--add-device-button)] px-4 rounded-lg scale-100 hover:scale-110 active:scale-75 transition duration-300"><span className="text-xl">+</span><span>Add Device</span></button>
    )
}

export default Button;