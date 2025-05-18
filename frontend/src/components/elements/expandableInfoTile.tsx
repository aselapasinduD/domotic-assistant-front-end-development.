import React, { useState } from "react";

interface CustomStyle extends React.CSSProperties{
    "--max-height": string;
}

interface ExpandableInfoTileProps {
    title: string;
    details: string;
}

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
                    {isExpanded ? "⋀" : "⋁"}
                </button>
            </div>
            <div className="px-2 overflow-hidden transition-all duration-600 ease-in-out max-h-[var(--max-height)]" style={style}>
                <p>{details}</p>
            </div>
        </div>
    );
}

export default ExpandableInfoTile;
