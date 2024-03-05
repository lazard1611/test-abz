import React from "react";
import './heading.scss';

const Heading = ({label}) => {
    return (
        <h1 className='heading'>
            {label}
        </h1>
    )
}

export default Heading;
