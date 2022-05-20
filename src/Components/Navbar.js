import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return(
        <div className="Navbar">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <h1>my travel journal</h1>
        </div>
    )
}