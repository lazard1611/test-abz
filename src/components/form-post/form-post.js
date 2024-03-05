import React from "react";
import Heading from "../heading/heading";
import FormInput from "../form-input/form_input";
import './form-post.scss';

const FormPost = () => {
    return (
        <section className='section form_post'>
            <div className="section__container">
                <Heading label='Working with POST request'/>
                <form action="#" className='form_post__wrap'>
                    <div className="form_inputs__list">
                        <FormInput
                            label='Your name'
                            type='text'
                            id='1'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormPost;
