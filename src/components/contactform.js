import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";
import Checkbox from "./checkbox";

import addContact from "../functions/addContact";

const ContactForm = () => {
    const fields = ["Small event catering", "Personal Chef", "Other"]
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [state, setState] = useState({
        submitting: false,
        submitted: false
    });

    const onSubmit = data => {
        setState({ ...state, submitting: true })
        if (addContact(data)) setState({ submitting: false, submitted: true });
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} />

            <div className="field">
                <label for="name" className="label is-size-4 has-text-weight-light">
                    <div className="control has-icons-left">
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Name"
                            id="name"
                            autofocus
                            {...register("name", { required: true })}
                        />
                        <span className="icon is-left">
                            <FaUser />
                        </span>
                    </div>
                </label>


                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p className="help is-danger">{message}</p>}
                />
            </div>


            <div className="field">
                <label for="email" className="label is-size-4 has-text-weight-light">
                    <div className="control has-icons-left">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input"
                            placeholder="Email"
                            {...register("email", {
                                required: "E-mail is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Please enter a valid e-mail address"
                                }
                            })}

                        />
                        <span className="icon is-left">
                            <FaEnvelope />
                        </span>
                        {errors.email ? (
                            <span className="icon is-small is-right">
                                <FaExclamationTriangle />
                            </span>
                        ) : null}

                    </div>
                </label>

                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className="help is-danger">{message}</p>}
                />
            </div>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">Services interested in:</label>
                </div>
                <div className="field-body">
                    {fields.map(item => (
                        <Checkbox
                            register={register}
                            value={item}


                        />
                    ))}
                </div>

            </div>


            <div className="field">
                <label for="message" className="label is-size-4 has-text-weight-light">
                    <textarea
                        name="message"
                        id="message"
                        {...register("message")}
                        rows="5"
                        className="textarea is-medium"
                        placeholder="Message">
                    </textarea>
                </label>
            </div>

            <button
                type="submit"
                onSubmit={handleSubmit(onSubmit)}
                onClick={handleSubmit(onSubmit)}
                className={`button is-success is-size-5 ${state.submitting ? 'is-loading' : null}`}>
                Send
            </button>
            { state.submitted ? (
                <div className="columns is-justify-content-center">
                    <div className=" box column is-one-third has-text-centered">
                        <FaCheckCircle className="is-size-1" />
                        <p className="is-size-3">Thank you!</p>
                        <p>We will get back to you as soon as possible.</p>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ContactForm;