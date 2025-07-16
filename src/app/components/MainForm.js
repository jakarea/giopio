'use client'

import React, { useState } from 'react';

const MainForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage('');
        setIsLoading(true); // Set loading state to true

        if (validateForm()) {
            await sendEmail(formData);
        }

        setIsLoading(false); // Set loading state to false after submission
    };

    const sendEmail = async (formData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage('Message submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('Failed to send message: ' + result.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <form className="flex flex-col gap-y-8 lg:w-[80%] lg:mx-auto xl:gap-y-16 xl:mx-0 xl:ml-auto xl:w-[782px]" onSubmit={handleSubmit} id="contact_form" name="contact_form">
            <div className="block xl:grid xl:grid-cols-2 xl:gap-x-[50px]">
                <div className="group mb-8 xl:mb-0">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className={`border-b bg-transparent border-fourth block w-full pb-1 font-normal text-base h-10 xl:h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth ${formErrors.name ? 'border-red-500' : ''}`}
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                </div>
                <div className="group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={`border-b bg-transparent border-fourth block w-full pb-1 font-normal text-base h-10 xl:h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth ${formErrors.email ? 'border-red-500' : ''}`}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                </div>
            </div>
            <div className="group">
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className={`border-b bg-transparent border-fourth block w-full pb-1 font-normal text-base h-10 xl:h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth ${formErrors.subject ? 'border-red-500' : ''}`}
                    value={formData.subject}
                    onChange={handleInputChange}
                />
                {formErrors.subject && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
            </div>
            <div className="group">
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className={`border-b bg-transparent border-fourth block w-full pb-1 font-normal text-base h-10 xl:h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth ${formErrors.message ? 'border-red-500' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}
                />
                {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
            </div>
            <div className="group sm:text-center xl:text-start xl:mt-10 xl:flex xl:items-center xl:justify-between">
                <button
                    type="submit"
                    className="rounded-[1px] bg-second py-3 px-10 text-lg font-bold text-white inline-flex items-center justify-center anim hover:!bg-first xl:text-[24px] xl:h-[78px] xl:px-[60px] anim dark:bg-white dark:text-second dark:hover:!text-white"
                    disabled={isLoading} // Disable the button while loading
                >
                    {isLoading ? (
                        <span className="loader">Sending...</span> // Show loading text or spinner
                    ) : (
                        'Message'
                    )}
                </button>
                {successMessage && (
                    <div className="mt-4 text-green-500">{successMessage}</div>
                )}
            </div>
        </form>
    );
};

export default MainForm;
