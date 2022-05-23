import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function LocationCard(props) {
  return (
    <div className="LocationCard">
      <img src={props.imageUrl} className="location-image" alt="location"/>
      <div className="card-info">
        <div className="location-container">
          <FontAwesomeIcon icon={faLocationDot} className="marker-icon" />
          <p className="card-location">{props.location}</p>
          <a href={props.googleMapsUrl} className="maps-link">View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-date">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
