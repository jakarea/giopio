"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link'

// YouTube video ID for the review video
const YOUTUBE_VIDEO_ID = "ttQ-pMXMC9Y";

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showEnglish, setShowEnglish] = useState(false);
    const playerRef = useRef(null);
    const containerRef = useRef(null);

    const handleVideoEnd = useCallback(() => {
        setIsPlaying(false);
    }, []);

    useEffect(() => {
        // Load YouTube IFrame API if not already loaded
        if (isPlaying && !window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying && containerRef.current) {
            const initPlayer = () => {
                if (window.YT && window.YT.Player) {
                    const playerDiv = document.createElement('div');
                    playerDiv.id = `player-about-${Date.now()}`;
                    playerDiv.style.width = '100%';
                    playerDiv.style.height = '100%';
                    containerRef.current.innerHTML = '';
                    containerRef.current.appendChild(playerDiv);

                    playerRef.current = new window.YT.Player(playerDiv.id, {
                        width: '100%',
                        height: '100%',
                        videoId: YOUTUBE_VIDEO_ID,
                        playerVars: {
                            autoplay: 1,
                            rel: 0,
                            modestbranding: 1,
                            playsinline: 1
                        },
                        events: {
                            onReady: (event) => {
                                // Ensure iframe fills container
                                const iframe = event.target.getIframe();
                                if (iframe) {
                                    iframe.style.width = '100%';
                                    iframe.style.height = '100%';
                                    iframe.style.position = 'absolute';
                                    iframe.style.top = '0';
                                    iframe.style.left = '0';
                                    iframe.style.borderRadius = '8px';
                                }
                            },
                            onStateChange: (event) => {
                                if (event.data === 0) {
                                    handleVideoEnd();
                                }
                            }
                        }
                    });
                } else {
                    setTimeout(initPlayer, 100);
                }
            };
            initPlayer();
        }

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, [isPlaying, handleVideoEnd]);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <>
            <section className="w-full pt-20 relative md:pt-[86px] xl:pt-[130px]" id="aboutSection">
                <div className="container">
                    <div className='text-center bg-black rounded-[4px] p-5 lg:p-7 xl:p-8 grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-end border border-[#252B37] xl:gap-x-20'>
                        <div className='w-full relative lg:col-span-5 flex items-center justify-center'>
                            {/* Video container with 9:16 aspect ratio (vertical TikTok style) */}
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto" style={{ aspectRatio: '9/16' }}>
                                {isPlaying ? (
                                    <div
                                        ref={containerRef}
                                        className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
                                        style={{ backgroundColor: '#000' }}
                                    />
                                ) : (
                                    <>
                                        <Image
                                            src="/assets/images/shopify/person.png"
                                            alt="Jawad Doroe, founder of laminaatspecialist.nl"
                                            fill
                                            className='object-cover rounded-lg'
                                            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                                        />
                                        <div
                                            onClick={handlePlayClick}
                                            className='absolute inset-0 flex items-center justify-center cursor-pointer'
                                        >
                                            <div className='flex items-center justify-center w-16 h-16 lg:w-[90px] lg:h-[90px] bg-first rounded-full play-icon hover:scale-110 transition-transform duration-300'>
                                                <Image src="/assets/images/shopify/play-icon.svg" alt="Play video" width={24} height={24} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='w-full lg:col-span-7 text-start font-onest'>
                            <div className="flex items-center justify-between">
                                <h2 className='font-semibold text-2xl md:text-[34px] lg:text-[42px] text-white leading-[140%]'>
                                    Trusted in the {" "}  Netherlands
                                </h2>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => setShowEnglish(!showEnglish)}
                                    className="relative group anim overflow-hidden anim bg-[#101828] rounded-[4px] py-1.5 px-3 text-xs font-medium text-white border border-[#414651] hover:border-first transition-colors whitespace-nowrap"
                                >
                                    {showEnglish ? 'Original' : 'English'}
                                </button>
                            </div>

                            {/* Testimonial Content Container with fixed height */}
                            <div className="min-h-[280px] lg:min-h-[320px]">
                                {/* Dutch Original Text */}
                                {!showEnglish && (
                                    <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5'>
                                        Hoi, ik ben Jeffrey, ik ben eigenaar van Kitchen Numbers. Wij werken momenteel al een jaar samen met eh Jakarea van Giopio.<br />
                                        Jakarea is momenteel ehm... volledig commit, los van al zijn side jobs en andere jobs die die heeft, tot Kitchen Numbers. Begrijpt onze visie volledig.<br />

                                        Ehm, wij zijn een startup. Ehm, doen dat vanuit ons eigen centen naast onze vaste job. Dus je kan begrijpen dat financiën wellicht soms wel even een struggle kunnen zijn. Ehm, iets waar je geen zorgen om hoeft te maken bij eh Jakarea.<br />

                                        Ehm, volledig commit. Ehm, begrijpt snel, begrijpt de visie snel. Wat wonderbaarlijk is, want wat wij eh... wij spreken de horeca aan. Nou ja, Giopio is een eh... Giopio is een bedrijf wat gewoon hè, developed in in websites en apps.<br />

                                        Ehm, wat mij dus heel erg aanspreekt is zijn commitment op iets waarvan je zou zeggen van nou ja, eh hier moet je verstand van hebben. Eh hij leert dus snel.<br />

                                        Ehm, prijs-kwaliteitverhouding... Geweldig. Ik raad iedereen aan om met Jakarea samen te werken. Kan niet anders dan goedkomen. Succes.
                                    </p>
                                )}

                                {/* English Translation */}
                                {showEnglish && (
                                    <p className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-3 lg:mt-5'>
                                        Hi, I'm Jeffrey, I am the owner of Kitchen Numbers. We have currently been working together with uh Jakarea from Giopio for a year.<br />
                                        Jakarea is currently uhm... fully committed, apart from all his side jobs and other jobs he has, to Kitchen Numbers. Understands our vision entirely.<br />

                                        Uhm, we are a startup. Uh, doing this from our own pockets next to our regular job. So you can understand that finances might well sometimes be a bit of a struggle. Uhm, something you don't have to worry about with uh Jakarea.<br />

                                        Uhm, fully committed. Uh, understands fast, grasps the vision fast. Which is amazing, because what we uh... we target the hospitality industry. Well yes, Giopio is a uh... Giopio is a company that just, right, develops in in websites and apps.<br />

                                        Uhm, so what really appeals to me is his commitment to something where you would say like well yeah, uh you need to have understanding of this. Uh so he learns fast.<br />

                                        Uhm, price-quality ratio... Amazing. I advise everyone to work together with Jakarea. It's bound to turn out well. Good luck.
                                    </p>
                                )}
                            </div>

                            <h5 className='mt-12 lg:mt-[72px] text-first font-medium text-xl lg:text-2xl'>
                                Jeffrey
                            </h5>
                            <h6 className='text-sm lg:text-lg text-[#D5D7DA] font-normal mt-1'>
                                Eigenaar van Kitchen Numbers
                            </h6>
                            <Image
                                src="https://kitchennmbrs.app/static-assets/images/logo-xl.svg"
                                alt="Kitchen Numbers Logo"
                                width={120}
                                height={40}
                                className="mt-4"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About