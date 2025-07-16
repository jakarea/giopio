'use client'

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const ScrollDown = () => {
    const scrollButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const nextSection = document.querySelector('#aboutSection');

            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
                nextSection.classList.add('scrolled');
            }
        };

        const scrollButton = scrollButtonRef.current;
        if (scrollButton) {
            scrollButton.addEventListener('click', handleScroll);
        }

        return () => {
            if (scrollButton) {
                scrollButton.removeEventListener('click', handleScroll);
            }
        };
    }, []);

    return (
        <div className="w-full text-center hidden xl:block xl:pt-[130px]">
            <Link href="#" className="bounceCursor relative z-50" ref={scrollButtonRef}>
                <img src="/assets/images/cursor-icon.svg" width={"100%"} height={"100%"} alt="cursor" className="w-fit mx-auto ltd" />
                <img src="/assets/images/cursor-icon-w.svg" width={"100%"} height={"100%"} alt="cursor dark" className="w-fit mx-auto dtl" />
            </Link>
        </div>
    )
}

export default ScrollDown