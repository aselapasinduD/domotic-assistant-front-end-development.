import React from "react";

import { SearchIcon } from "../../assets/icons/icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input search element.
 * 
 * @param InputProps - HTML input element attibutes
 * @returns JSX element
 * @since 1.0.0
 */
const InputSearch: React.FC<InputProps> = ({className, ...props}) => {
    return(
        <span className="w-full max-w-80 flex items-center relative [&>input:focus-visible>button]:text-[var(--input-focused-border-color)]">
            <input className={`peer w-full h-12 font-tiny border border-[var(--input-default-border-color)] focus-visible:border-[var(--input-focused-border-color)] rounded-lg px-6 ${className || ""}`} placeholder="Search..." {...props} />
            <button type="button" title="Search" className="absolute right-2 p-2 cursor-pointer text-[var(--input-default-border-color)] peer-focus-visible:text-[var(--input-focused-border-color)]"><SearchIcon size={24} /></button>
        </span>
    )
}

export default InputSearch;