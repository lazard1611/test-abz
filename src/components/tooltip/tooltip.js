import React from "react";
import './tooltip.scss';

const Tooltip = ({ text }) => {
    return (
        <div className="tooltip">
            <div className="tooltip__text">{text}</div>
            <div className="tooltip__visible">{text}</div>
        </div>
    )
}

export default Tooltip;
