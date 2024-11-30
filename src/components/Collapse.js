import React, { useState } from "react";
import Arrow from "../assets/arrow-white.png";

export default function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className="collapse-container">
            <div className="collapse-title" onClick={handleCollapse}>
                <h2>{props.collapseName}</h2>
                <img
                    src={Arrow}  
                    alt="Flèche cliquable"
                    className={isCollapsed ? "rotate-arrow" : ""}
                    />
            </div>
            <article className={`collapse-content ${isCollapsed ? "open" : "closed"}`}> 
                <p>{props.collapseDescription}</p>
            </article>
        </section>
    )
}