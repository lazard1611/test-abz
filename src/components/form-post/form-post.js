import React, {useEffect, useState} from "react";
import Heading from "../heading/heading";
import FormInput from "../form-input/form-input";
import FormRadio from "../form-radio/form-radio";
import FormFile from "../form-file/form-file";
import Button from "../button/button";
import './form-post.scss';
import TestServices from "../../services/test-services";
import Spinner from '../../components/spiner/spinner';
import { useForm } from 'react-hook-form';
import Success from "../success/success";

const FormPost = () => {
    const dataForm = [
        {
            label: 'Your name',
            type: 'text',
            id: 'username',
            validations: {
                minLength: { value: 2, message: 'The name must be at least 2 characters.' },
                maxLength: { value: 60, message: 'The name must be a maximum of 60 characters.' },
            },
        },
        {
            label: 'Email',
            type: 'email',
            id: 'email',
            validations: {
                pattern: {
                    value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                    message: 'The email must be a valid email address.',
                },
            },
        },
        {
            label: 'Phone',
            type: 'tel',
            id: 'phone',
            validations: {
                pattern: {
                    value: /^[+]{0,1}380([0-9]{9})$/,
                    message: 'The phone must match a Ukrainian number format.',
                },
            },
            message: '+38 (XXX) XXX - XX - XX',
        },
    ];

    const [dataRadio, setDataRadio] = useState(null);
    const [preloader, setPreloader] = useState(true);
    const [token, setToken] = useState('');
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        const testServices = new TestServices();
        testServices
            .getPositionResource()
            .then((data) => setDataRadio(data))
            .then(() => setPreloader(false))
            .catch()

        testServices
            .getToken()
            .then((data) => setToken(data.token))
            .catch();
    }, []);

    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
            radio: ''
        },
        mode: 'onSubmit'
    })

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = form;

    const watchedFields = watch();

    const radioBtns = preloader ? <Spinner/> : dataRadio.map((inputEl) => (
        <FormRadio key={inputEl.name} dataRadio={inputEl} control={control} setValue={setValue} register={ {...register('radio')} }/>
    ))

    const onSubmitBtn = (data) => {
        const formData = new FormData();
        formData.append('name', data.username);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('position_id', watch('radio'));

        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files[0]) {
            formData.append('photo', fileInput.files[0]);
        }

        const testServices = new TestServices();
        testServices
            .submitForm(formData, token)
            .then((data) => {
                if (data.success) {
                    setIsPending(true);
                } else {
                    console.log('Обробка не вдалої відповіді', data.message);
                }
            })
            .catch((error) => {
                console.log('Обробка помилки', error);
            });
    }

    const onError = (error) => {
        console.log('Error', error);
    }

    return (
        <section className='section form_post'>
            {!isPending && <div className="form_post__container">
                <Heading label='Working with POST request'/>
                <form className='form_post__wrap' onSubmit={handleSubmit(onSubmitBtn, onError)} noValidate>
                    <div className="form_inputs__list">
                        {
                            dataForm.map((field, index) => (
                                <FormInput
                                    key={index} field={field}
                                    watchedFields={watchedFields}
                                    register={register}
                                    errors={errors}
                                />
                            ))
                        }
                    </div>

                    <div className="form_radio__wrap">
                        <div className="form_radio__title">Select your position</div>
                        <div className="form_radio__list">
                            { radioBtns }
                        </div>
                    </div>

                    <FormFile/>

                    <div className="form_post__btn_wrap">
                        <Button label='Sign up' type='submit'/>
                    </div>
                </form>
            </div>}

            {isPending && <Success label='User successfully registered'/>}
        </section>
    )
}

export default FormPost;
