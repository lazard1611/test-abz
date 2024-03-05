import React from "react";
import './button.scss';

const Button = ({label}) => {
    return (
        <button className='btn'>
            {label}
        </button>
    )
}

export default Button;
