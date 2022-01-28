import React from "react";
import icon from "./location-icon.png";

export default function Section(props) {
    return (
        <div className="section">
            <div className="image--box">
                <img src={props.imageUrl} className="img"/>
            </div>
            <div className="info--box">
                <div className="info">
                    <img src={icon} className="icon-small"/><span>{props.location}</span> <a href={props.googleMapsUrl}>View on Google Map</a>
                </div>
                <h1>{props.title}</h1>
                <h4><span>{props.startDate}</span> - <span>{props.endDate}</span></h4>
                <p>{props.description}</p>
            </div>
        </div>

    )
}