import React from "react";

interface CustomStyle extends React.CSSProperties{
    "--toggle-btn-translate-x": string;
    "--toggle-top-color": string;
}

interface ToogleButtonProps{
    isToggle: boolean;
    onToggleButtonClick: () => void;
}

/**
 * 
 * @param isToggle - Boolean value to check whether the button is toggle or not.
 * @param onToggleButtonClick - Callback function for Toggle the button.
 * @returns JSX element
 * @since 1.0.0
 */
const Button: React.FC<ToogleButtonProps> = ({isToggle, onToggleButtonClick}) => {

    const style: CustomStyle = {
        "--toggle-btn-translate-x": isToggle? "38px" : "0",
        "--toggle-top-color": isToggle? "var(--toggle-btn-active-top)" : "var(--toggle-btn-inactive-top)"
    }

    return(
        <button type="button" className="w-18 h-9 rounded-full cursor-pointer border border-[var(--toggle-btn-border)] p-1 bg-[var(--toggle-btn-background)]" onClick={onToggleButtonClick}>
            <span className="flex items-center justify-center w-6 h-6 bg-[var(--toggle-top-color)] rounded-full translate-x-[var(--toggle-btn-translate-x)] duration-300 ease-in" style={style}></span>
        </button>
    )
}

export default Button;