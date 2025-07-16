'use client'

import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const CareerForm = ({ originalSubject }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFormData({
                ...formData,
                file
            });
            setErrors((prevErrors) => ({
                ...prevErrors,
                file: ''
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                file: 'Only PDF files are supported'
            }));
        }
    };

    const removeFile = () => {
        setFormData({
            ...formData,
            file: null
        });
    };

    useEffect(() => {
        setFormData({
            ...formData,
            subject: 'Application For The Post: ' + originalSubject
        });

    }, [])
    
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Cover letter is required';
        if (!formData.file) newErrors.file = 'Resume upload is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) { 
            console.log(formData);
        }
    };

    return (
        <form className="flex flex-col gap-y-12 xl:gap-y-16" onSubmit={handleSubmit}>
            <div className="block xl:grid xl:grid-cols-2 xl:gap-x-[50px]">
                <div className="group mb-12 xl:mb-0">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-b bg-transparent border-fourth block w-full pb-4 font-normal text-lg h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-b bg-transparent border-fourth block w-full pb-4 font-normal text-lg h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
            </div>
            <div className="group">
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-b bg-transparent border-fourth block w-full pb-4 font-normal text-lg h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth"
                />
            </div>
            <div className="group">
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Cover Letter"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-b bg-transparent border-fourth block w-full pb-4 font-normal text-lg h-[50px] focus-visible:outline-none text-second placeholder:text-fourth focus-within:border-first xl:text-2xl xl:pb-6 anim dark:text-white dark:placeholder:text-d-sixth"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div className="grid gap-y-5 md:grid-cols-2 md:items-center">
                <div className="flex flex-col">
                    <input type="file" name="file" id="file" onChange={handleFileChange} className="hidden" />
                    <label htmlFor="file" className="inline-flex overflow-hidden items-center justify-center bg-[#E3E3E3] font-bold text-lg text-second py-5 gap-x-2 xl:h-[92px] xl:py-6 xl:max-w-[309px] cursor-pointer xl:text-2xl">
                        {formData.file ? (
                            <>
                                <img src="/assets/images/pdf-icon.svg" alt="PDF icon" className="w-8" />
                                <span>{formData.file.name}</span>
                                <button type="button" onClick={removeFile} className="ml-2 text-red-500">X</button>
                            </>
                        ) : (
                            <>
                                Resume Upload <img src="/assets/images/download-icon-b.svg" alt="download-icon" />
                            </>
                        )}
                    </label>
                    {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
                </div>
                <div className="group text-end sm:text-center md:text-end">
                    <button type="submit" disabled={isSubmitting} className="rounded-[1px] bg-first py-4 px-10 text-lg font-bold text-white inline-flex items-center justify-center anim hover:!bg-second xl:text-[24px] xl:h-[92px] xl:px-[60px] anim gap-x-2 xl:gap-x-4">
                        {isSubmitting ? 'Submitting...' : 'Apply Now'}
                        <img src="/assets/images/arrow-right-w.svg" alt="a" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CareerForm;
