'use client'

import React, { useState } from 'react';

const SubscribeEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const validateForm = () => {
        if (!email.trim()) {
            setError('Email is required');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setLoading(true);
            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });
    
                if (response.ok) {
                    setSuccessMessage('Subscribed successfully!');
                    setEmail('');
                } else {
                    setError('Failed to subscribe');
                }
            } catch (error) {
                setError('An error occurred');
            } finally {
                setLoading(false);
            }
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="w-full mt-8 relative xl:absolute z-30 xl:right-0 xl:-bottom-8 xl:w-[37%]">
            <input
                type="email"
                placeholder="Your Email"
                className="h-[58px] rounded-full py-[10px] pl-[30px] pr-14 bg-[#334B57] block w-full text-white font-normal text-sm focus-visible:outline-none border border-transparent focus-within:border-first xl:h-[60px] xl:pl-[25px] anim dark:bg-[#ffffff0f]"
                value={email}
                onChange={handleInputChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button
                type="submit"
                className="absolute right-[10px] top-[7px] py-3 focus-visible:outline-none h-[44px] rounded-full inline-flex justify-center items-center text-new font-medium px-4 leading-5 bg-first anim hover:bg-white hover:text-second"
                disabled={loading}
            >
                {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
            {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
        </form>
    );
};

export default SubscribeEmail;