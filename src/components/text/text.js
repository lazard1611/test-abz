import React from "react";
import './text.scss';

const Text = ({label}) => {
    return (
        <p className='text'>
            {label}
        </p>
    )
}

export default Text;
