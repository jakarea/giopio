'use client'

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            errors.name = 'আপনার নাম লিখুন।';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'আপনার ফোন নাম্বার লিখুন।';
        } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
            errors.phone = 'সঠিক ফোন নাম্বার লিখুন।';
        }
        if (!formData.message.trim()) {
            errors.message = 'আপনার কাজের সম্পর্কে লিখুন।';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        setIsLoading(true);

        if (validateForm()) {
            await sendMessage(formData);
        }
        setIsLoading(false);
    };

    const sendMessage = async (formData) => {
        try {
            const response = await fetch('/api/ecommerce', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage('সফলভাবে জমা দেওয়া হয়েছে!');
                setFormData({ name: '', phone: '', message: '' });
            } else {
                setErrorMessage('ব্যর্থ হয়েছে: ' + result.message);
            }
        } catch (error) { 
            setErrorMessage('অনুগ্রহ করে আবার চেষ্টা করুন।');
        }
    };

    return (
        <form className="w-full grid grid-cols-1 gap-y-6 xl:gap-x-8 xl:grid-cols-2" onSubmit={handleSubmit}>
            <div className="w-full xl:col-span-1">
                <label htmlFor="user_name" className="text-[#26404C] font-normal text-sm block mb-2.5 xl:text-2xl dark:text-white">আপনার নাম<span className="text-[#FC7070]">*</span></label>
                <input
                    type="text"
                    name="name"
                    id="user_name"
                    className={`w-full bg-[#FBFBFB] border ${formErrors.name ? 'border-red-500' : 'border-[#AEACAC80]'} rounded-[4px] h-12 pl-3 dark:bg-[#132731] dark:text-white`}
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="w-full xl:col-span-1">
                <label htmlFor="user_phone" className="text-[#26404C] font-normal text-sm block mb-2.5 xl:text-2xl dark:text-white">আপনার ফোন নাম্বার<span className="text-[#FC7070]">*</span></label>
                <input
                    type="text"
                    name="phone"
                    id="user_phone"
                    className={`w-full bg-[#FBFBFB] border ${formErrors.phone ? 'border-red-500' : 'border-[#AEACAC80]'} rounded-[4px] h-12 pl-3 dark:bg-[#132731] dark:text-white`}
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>
            <div className="w-full xl:col-span-2">
                <label htmlFor="user_message" className="text-[#26404C] font-normal text-sm block mb-2.5 xl:text-2xl dark:text-white">আপনার কাজের সম্পর্কে লিখুন<span className="text-[#FC7070]">*</span></label>
                <textarea
                    rows="3"
                    id="user_message"
                    name="message"
                    className={`w-full bg-[#FBFBFB] border ${formErrors.message ? 'border-red-500' : 'border-[#AEACAC80]'} rounded-[4px] pl-3 dark:bg-[#132731] dark:text-white`}
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <div className="w-full xl:col-span-2">
                <button
                    type="submit"
                    className="w-full bg-orange rounded-lg py-2.5 text-white text-base font-semibold tracking-wide hover:bg-deep xl:text-[32px] xl:py-3 xl:pt-5 dark:hover:bg-[#0A0F24]"
                    disabled={isLoading}
                >
                    {isLoading ? 'পাঠানো হচ্ছে...' : 'পাঠান'}
                </button>
                {successMessage &&
                    <div className="text-center mt-3">
                        <p className="text-green-500 text-sm ">{successMessage}</p>
                    </div>}
                {errorMessage &&
                    <div className="text-center mt-3">
                        <p className="text-red-500 text-sm ">{errorMessage}</p>
                    </div>}
            </div>
        </form>
    );
};

export default ContactForm;
