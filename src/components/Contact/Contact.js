import React from 'react';
import { useForm } from "react-hook-form";
import "./Contact.css"

import { init, sendForm } from 'emailjs-com';
init('user_zIKL5X6p3u0qt4CIOxsMR');

const Contact = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data)

        sendForm('default_service', 'template_34jmmew', '#form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    };

    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;


    return (
        <div id="contact-form" className="contact">
            <h2 className="section__title">Contact</h2>
            <div className="contact__container">
                <div className="contact__info">
                    <address>
                        <div className="info__wrapper">
                            <h3 className="info__title"> <img src="/images/location.svg" alt="location icon" /> Address</h3>
                            <p className="info__detail">169 Botma Street, Steenberg</p>
                            <p className="info__detail">Cape Town, 7945</p>
                            <p className="info__detail">South Africa</p>
                        </div>
                        <div className="info__wrapper">
                            <h3 className="info__title"> <img src="/images/phone.svg" alt="phone icon" /> Lets Chat</h3>
                            <p className="info__detail">(+27) 61 520 2073</p>
                        </div>
                        <div className="info__wrapper">
                            <h3 className="info__title"> <img src="/images/email.svg" alt="email icon" /> Pop a mail</h3>
                            <a href="mailto:bluegumdev@gmail.com"> bluegumdev@gmail.com</a>
                        </div>
                    </address>
                </div>
                <form id="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input__wrapper">
                        <label for="input_name">NAME</label>
                        <input id="input_name" className="input input__text " name="user_name" ref={register({ required: true })} maxLength='30'
                            aria-invalid={errors.user_name ? "true" : "false"} />
                        {errors.user_name && errors.user_name.type === "required" && (
                            <div role="alert">Name is required<br /></div>
                        )}
                    </div>
                    <div className="input__wrapper">
                        <label for="input_email">EMAIL</label>
                        <input id="input_email" className="input input__text " name="user_email" ref={register({ required: true })} />
                        {errors.user_name && errors.user_name.type === "required" && (
                            <div role="alert">Email is required<br /></div>
                        )}
                    </div>
                    <div className="input__wrapper">
                        <label for="input_message">MESSAGE</label>
                        <textarea id="input_message" className="input input__textfield " name="message" ref={register({ required: true })} maxLength='1500' />
                        <p className='message-chars-left'>{messageCharsLeft}</p>
                        {errors.message && errors.message.type === "required" && (
                            <div role="alert">Message is required<br /></div>
                        )}
                    </div>
                    <input className="input input__submit " type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact
