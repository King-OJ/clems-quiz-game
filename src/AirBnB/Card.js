import React from "react"


export default function Card(props) {
    let badgeText
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.x.coverImg} />
            <div className="ratings">
                <i className="fa fa-star" i="true"></i>
                <span>{props.x.stats.rating}</span> 
                <span className="gray"> ({props.x.stats.reviewCount}) • </span>
                <span className="gray">{props.x.location}</span>
            </div>
            <p>{props.x.title}</p>
            <p><span className="bold">From {props.x.price}</span> /person </p>
        </section>

    )
}