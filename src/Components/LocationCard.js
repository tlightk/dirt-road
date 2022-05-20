import React from "react";

export default function LocationCard(props) {
    return(
        <div className="LocationCard">
            <img src={props.imageUrl} />
            <h2 classname="location-title">{props.title}</h2>
        </div>
    )
}