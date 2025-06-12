import React from "react";
import ExpandableInfoTile from "../../expandableInfoTile";

interface Stays{
    title: string,
    details: string
}

const listOfStays: Stays[] = [
    {
        title: "Kitchen",
        details: "Sed venenatis egestas blandit. Maecenas ac metus quis leo euismod congue sed at augue."
    },
       {
        title: "Living Room",
        details: "Aliquam placerat lectus eros, et posuere risus tempor eu."
    },
       {
        title: "Bedrooms",
        details: "Integer vitae consequat urna. Suspendisse aliquet pharetra lectus."
    },
       {
        title: "Bath",
        details: "Nam dignissim lacus et justo dictum fringilla. Suspendisse at feugiat erat."
    },
       {
        title: "Garden",
        details: "Praesent odio ipsum, accumsan nec faucibus vel, vulputate ut augue."
    },
]

const Stays = () => {
    return(
        <div className="flex flex-col">
            <h4 className="mb-4 text-md font-medium">STAYS</h4>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex flex-col">
                    {listOfStays.map((stay) => 
                        <ExpandableInfoTile title={stay.title} details={stay.details} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stays;