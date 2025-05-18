import React, { useState } from "react";

interface CustomStyle extends React.CSSProperties{
    "--max-height": string;
}

interface ExpandableInfoTileProps {
    title: string;
    details: string;
}

/**
 * 
 * @param title - title of the Info
 * @param details - information you want to show when expand.
 * @returns JSX element
 * @since 1.0.0
 */
const ExpandableInfoTile: React.FC<ExpandableInfoTileProps> = ({ title, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const style: CustomStyle = {
        "--max-height": isExpanded ? "800px" : "0"
    }

    return (
        <div className="border-b">
            <div className="flex justify-between my-3">
                <p>{title}</p>
                <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? (
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                            <path d="M5 12L10 7L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                    ) : (
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> 
                    )}
                </button>
            </div>
            <div className="px-2 overflow-hidden transition-all duration-600 ease-in-out max-h-[var(--max-height)]" style={style}>
                <p>{details}</p>
            </div>
        </div>
    );
}

export default ExpandableInfoTile;
