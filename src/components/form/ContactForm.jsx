import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useContactUsMutation } from '../../services/ContactUs';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [contactUs] = useContactUsMutation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const ContactSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        middleName: Yup.string(), // optional
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
            .required('Contact number is required'),
        subject: Yup.string().required('Subject is required'),
        message: Yup.string()
            .min(10, 'Message must be at least 10 characters')
            .required('Message is required'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        console.log('values', values);

        const { firstName, middleName, lastName, ...rest } = values;
        const fullname = [firstName.trim(), middleName.trim(), lastName.trim()]
            .filter(name => name) // remove empty ones
            .join(' '); // join with single space
        const finalValues = {
            fullname: fullname,
            ...rest
        }

        setIsSubmitting(true)
        try {
            const response = await contactUs(finalValues).unwrap();
            toast.success(response.message);
            resetForm();
        } catch (err) {
            if (err.status === 404 || err.originalStatus === 404) {
                toast.error("Unable to send Message. Please try later.");
            } else if (err.error?.includes("Unexpected token '<'")) {
                toast.error("Server error: Invalid response. Contact support.");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputStyle = 'text-xs md:text-sm lg:text-base w-full px-3 py-2 border rounded outline-none focus:border-lightblue transition-all drop-shadow-soft border border-[#999] ';

    return (
        <div className="w-full p-4 drop-shadow rounded-[20px]">
            <div className="w-full bg-lightblue p-3 text-center font-bold md:text-[28px] text-[22px] text-white rounded-t-[20px]">
                Contact Us
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="grid grid-cols-1 gap-7 bg-lightblue/10 py-14 rounded-b-[20px] px-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
                            <div>
                                <Field
                                    name="firstName"
                                    placeholder="First Name"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="middleName"
                                    placeholder="Middle Name (Optional)"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="middleName" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="lastName"
                                    placeholder="Last Name"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="phone"
                                    placeholder="Contact Number"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="subject"
                                    placeholder="Subject"
                                    className={inputStyle}
                                />
                                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                            </div>
                        </div>

                        <div>
                            <Field
                                name="message"
                                as="textarea"
                                rows="4"
                                placeholder="Write your message here..."
                                className={`${inputStyle} resize-none`}
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="sm:w-[150px] bg-lightblue text-sm w-[120px] text-white py-2 rounded hover:bg-commonblue cursor-pointer transition-colors"
                        >
                            {
                                isSubmitting ?
                                    (
                                        'Submitting'
                                    ) : (
                                        'Submit'
                                    )
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
