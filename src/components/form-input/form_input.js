import React from "react";
import './form_input.scss';

const FormInput = ({label, id , type}) => {
    return (
        <div className="form_input__element">
            <input id={id} type={type} className='form_input'/>
            <label htmlFor={id} className='form_input__label'>{label}</label>
            <div className="form_input__messages">Error</div>
        </div>
    )
}

export default FormInput;
