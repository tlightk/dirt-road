import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return(
        <div className="Navbar">
            <FontAwesomeIcon icon={faEarthAmericas} className="globe-icon" />
            <h1 className="navbar-title">my travel journal.</h1>
        </div>
    )
}