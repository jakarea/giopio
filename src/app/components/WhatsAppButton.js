"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Draggable from 'react-draggable';

const WhatsAppButton = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Function to check screen size
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // Large screens (lg breakpoint: 1024px)
        };
        
        handleResize(); // Initial check on mount
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const whatsappButton = (
        <div className="fixed bottom-6 right-2 z-[9999]"> 
            <Link aria-label='whatsapp' href="https://api.whatsapp.com/send?phone=8801728247398" 
                className="group flex xl:inline-flex items-center justify-center whatsapp-bttn h-9 xl:h-[48px] w-[110px] xl:w-[165px] rounded-full">
                <Image
                    src="/assets/images/whatsapp-w.svg"
                    width={28}
                    height={28}
                    alt="whatsapp icon"
                    className="mr-2 w-5 xl:w-7 anim" 
                />
                <span className='text-xs xl:text-base font-semibold text-white'>WhatsApp</span>
            </Link>
        </div>
    );

    return isDesktop ? <Draggable>{whatsappButton}</Draggable> : whatsappButton;
}

export default WhatsAppButton;