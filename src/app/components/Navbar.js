'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import DarkModeToggle from './DarkModeToggle ';
import { usePathname } from 'next/navigation'
import CaseStudyMegaMenu from './CaseStudyMegaMenu';
import menus from '../../../data/navbar/items';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false); // State for mega menu visibility
    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);
    const pathname = usePathname();

    // Toggle menu visibility
    const toggleMenu = (event) => {
        event.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Toggle mega menu visibility on click for smaller devices
    const toggleMegaMenuClick = () => {
        setShowMegaMenu(!showMegaMenu);
    };

    // Open mega menu on hover for lg and larger devices
    const openMegaMenuHover = () => {
        setShowMegaMenu(true);
    };

    // Close mega menu on hover for lg and larger devices
    const closeMegaMenuHover = () => {
        setShowMegaMenu(false);
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    // Effect to add click outside listener
    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-7 items-center">
            <div className="navbar-brand lg:col-span-2 lg:flex lg:justify-start lg:items-center xl:pb-4">
                <Link href="/" aria-label="Homepage">
                    <Image
                        src="/assets/images/logo.svg"
                        alt='Giopio Logo'
                        width="140"
                        height="44"
                        loading='lazy'
                        className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[120px] xl:w-[140px] object-fill ltd"
                    />
                    <Image
                        src="/assets/images/logo-white.svg"
                        alt='Giopio Logo Dark'
                        width="140"
                        height="44"
                        loading='lazy'
                        className="w-[85px] sm:w-[90px] md:w-[100px] lg:w-[120px] xl:w-[140px] object-fill dtl"
                    />
                </Link>
            </div>
            <div className="flex justify-end lg:hidden gap-x-4">
                <DarkModeToggle />
                <button
                    ref={hamburgerRef}
                    type="button"
                    className="block group anim"
                    id="hamburger"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                    <span className="w-[10px] h-[2px] bg-second block ml-auto group-hover:ml-0 anim dark:bg-white"></span>
                    <span className="w-[20px] h-[2px] bg-second block my-[5px] anim dark:bg-white"></span>
                    <span className="w-[10px] h-[2px] bg-second block group-hover:ml-auto anim dark:bg-white"></span>
                </button>
            </div>
            <div
                ref={menuRef}
                id="menu"
                className={`bg-second absolute -z-50 left-5 right-5 top-[60px] sm:top-[68px] ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[120%]'
                    } bg-nav-drop bg-contain bg-left-top bg-no-repeat anim lg:relative lg:translate-x-0 lg:bg-transparent lg:bg-none lg:col-span-5 lg:top-auto lg:right-auto lg:left-auto lg:flex lg:justify-center lg:z-50`}
            >
                <ul className="p-[30px] flex flex-col gap-y-6 sm:text-end md:text-center lg:flex-row lg:p-0 lg:items-center lg:gap-y-0 lg:gap-x-8 lg:z-[999] xl:z-[9999] xl:gap-x-9">
                    {menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`relative anim group xl:pb-4 ${menu.has_dropdown === 1 ? 'mega-menu-open' : ''}`}
                            onClick={menu.has_dropdown === 1 ? toggleMegaMenuClick : undefined}
                            onMouseEnter={menu.has_dropdown === 1 ? openMegaMenuHover : undefined}
                            onMouseLeave={menu.has_dropdown === 1 ? closeMegaMenuHover : undefined}
                        >
                            <Link
                                href={menu.url}
                                className={`menu-link ${menu.has_dropdown === 1 ? 'sm:justify-end md:justify-center' : ''} ${pathname === menu.url ? 'active' : ''}`}
                            >
                                {menu.name}
                                {menu.has_dropdown === 1 && (
                                    <>
                                        <Image src="/assets/images/angle-down.svg" alt="dropdown indicator" className="ml-[5px] ltd anim" width="10" height="10" />
                                        <Image src="/assets/images/angle-down-w.svg" alt="dropdown indicator white" className="ml-[5px] dtl anim" width="10" height="10" />
                                    </>
                                )}
                            </Link>
                            {/* Render dropdown if has_dropdown is 1 */}
                            {menu.has_dropdown === 1 && (
                                <div
                                    className={`w-full lg:absolute lg:left-[-280px] lg:top-10 lg:w-[982px] xl:w-[1248px] xl:left-[-354px] rounded-lg bg-white xl:z-[99999] p-5 xl:p-6 mt-4 lg:mt-0 anim dark:bg-[#222338] border border-transparent dark:border-[#32344D] ${showMegaMenu ? 'block' : 'hidden'}`}
                                >
                                    <CaseStudyMegaMenu />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="sm:ml-auto sm:justify-end md:justify-center sm:pr-[15px] flex items-center gap-x-4 relative lg:z-[999] xl:z-[999] px-[30px] pt-0 pb-[20px] xl:p-0 lg:p-0 xl:pb-4">
                    <li>
                        <Link
                            href="/book-a-call"
                            className="btnz btnz-2 inline-flex py-2 px-5  text-sm font-semibold text-first anim xl:text-base hover:text-second dark:hover:!text-white"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Book a Call
                        </Link>
                    </li>
                    <li className='hidden lg:block'>
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
