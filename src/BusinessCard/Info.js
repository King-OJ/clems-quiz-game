import React from "react"
import Infopic from './Infopic.jpg';

export default function Info() {
    return (
        <div>
            <img src = {Infopic} alt="Infopic" width="100px"/>
            <div className = "info">
                <h2>Clement Ojiguo</h2>
                <h4>Front End Developer</h4>
                <h6>clementojigs@hotmail.com</h6>
                <div className="btn">
                    <button className="btn-1"><i className="fa fa-envelope" i="true"> </i>Email</button>
                    <button className="btn-2"><i i className="fa fa-linkedin" i="true"> </i>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}