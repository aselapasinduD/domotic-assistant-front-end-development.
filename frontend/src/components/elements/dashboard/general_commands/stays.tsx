import React from "react";
import ExpandableInfoTile from "../../expandableInfoTile";

interface Stays{
    title: string,
    details: string
}

const listOfStays: Stays[] = [
    {
        title: "Kitchen",
        details: "ashfioasufiowehjfkalshdfisadf asoufhio asugf aioshfiaosfyhio asugfaosit fasdf."
    },
       {
        title: "Living Room",
        details: "ashfioasufiowehjfkalshdfisadf asoufhio asugf aioshfiaosfyhio asugfaosit fasdf."
    },
       {
        title: "Bedrooms",
        details: "ashfioasufiowehjfkalshdfisadf asoufhio asugf aioshfiaosfyhio asugfaosit fasdf."
    },
       {
        title: "Bath",
        details: "ashfioasufiowehjfkalshdfisadf asoufhio asugf aioshfiaosfyhio asugfaosit fasdf."
    },
       {
        title: "Garden",
        details: "ashfioasufiowehjfkalshdfisadf asoufhio asugf aioshfiaosfyhio asugfaosit fasdf."
    },
]

const Stays = () => {
    return(
        <div>
            <h4 className="mb-4 text-md font-medium">STAYS</h4>
            {listOfStays.map((stay) => 
                <ExpandableInfoTile title={stay.title} details={stay.details} />
            )}
        </div>
    )
}

export default Stays;