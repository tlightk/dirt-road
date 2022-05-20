import React from "react";

export default function LocationCard(props) {
  return (
    <div className="LocationCard">
      <img src={props.imageUrl} />
      <div className="card-info">
        <div className="location-container">
          <p className="card-location">{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 classname="card-title">{props.title}</h2>
        <p className="card-date">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
