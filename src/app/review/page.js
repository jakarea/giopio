"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

// Video Review Card Component with vertical YouTube player
function VideoReviewCard({
    youtubeVideoId,
    thumbnail,
    reviewTextNL,
    reviewTextEN,
    reviewerName,
    reviewerRole,
    reviewerIcon,
    isPlaying,
    onPlay,
    onVideoEnd
}) {
    const playerRef = useRef(null);
    const containerRef = useRef(null);
    const [showEnglish, setShowEnglish] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Determine current review text based on language state
    const currentReviewText = showEnglish ? reviewTextEN : reviewTextNL;

    // Character limit for "show more"
    const CHAR_LIMIT = 500;
    const shouldShowMore = currentReviewText.length > CHAR_LIMIT;
    const displayText = isExpanded || !shouldShowMore
        ? currentReviewText
        : currentReviewText.slice(0, CHAR_LIMIT) + '...';

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
                    playerDiv.id = `player-${youtubeVideoId}-${Date.now()}`;
                    playerDiv.style.width = '100%';
                    playerDiv.style.height = '100%';
                    containerRef.current.innerHTML = '';
                    containerRef.current.appendChild(playerDiv);

                    playerRef.current = new window.YT.Player(playerDiv.id, {
                        width: '100%',
                        height: '100%',
                        videoId: youtubeVideoId,
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
                                }
                            },
                            onStateChange: (event) => {
                                if (event.data === 0) {
                                    onVideoEnd();
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
    }, [isPlaying, youtubeVideoId, onVideoEnd]);

    return (
        <div className='text-center bg-black rounded-[4px] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-7 items-start border border-[#252B37]'>
            <div className='w-full lg:col-span-6 text-start flex  flex-col h-full'>
                {/* Language toggle button */}
                <div className="flex justify-end mb-2">
                    <button
                        onClick={() => setShowEnglish(!showEnglish)}
                        className="bg-[#101828] rounded-[4px] py-1 px-2.5 text-xs font-medium text-white border border-[#414651] hover:border-first transition-colors whitespace-nowrap flex items-center gap-x-1.5"
                        title={showEnglish ? 'Switch to Dutch' : 'Switch to English'}
                    >
                        {showEnglish ? (
                            <>
                                <span>🇳🇱</span>
                                <span>NL</span>
                            </>
                        ) : (
                            <>
                                <span>🇬🇧</span>
                                <span>EN</span>
                            </>
                        )}
                    </button>
                </div>

                <div>
                    <div className="max-h-[120px] min-h-[400px] lg:max-h-[400px] overflow-y-auto">
                        <p
                        className='text-sm lg:text-base text-[#D5D7DA] font-normal font-manrope mb-4'
                        dangerouslySetInnerHTML={{ __html: displayText }}
                    />
                    </div>
                    {shouldShowMore && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className='text-first text-sm font-medium hover:underline cursor-pointer'
                        >
                            {isExpanded ? 'Show less' : 'Show more'}
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-x-4 mt-4">
                    <div>
                        {reviewerIcon}
                    </div>
                    <div>
                        <h5 className='text-white font-medium text-base lg:text-lg font-onest'>
                            {reviewerName}
                        </h5>
                        <h6 className='text-sm lg:text-base text-[#D5D7DA] font-medium font-manrope mt-0.5'>
                            ✅ {reviewerRole}
                        </h6>
                    </div>
                </div>
            </div>
            <div className='w-full relative lg:col-span-6 flex items-center justify-center'>
                {/* Vertical aspect ratio container (9:16) */}
                <div className="relative w-full max-w-[280px] mx-auto" style={{ aspectRatio: '9/16' }}>
                    {isPlaying ? (
                        <div
                            ref={containerRef}
                            className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
                            style={{ backgroundColor: '#000' }}
                        />
                    ) : (
                        <>
                            <Image
                                src={thumbnail}
                                alt="Video Thumbnail"
                                fill
                                className='object-cover rounded-lg'
                                sizes="(max-width: 280px) 100vw, 280px"
                            />
                            <div
                                onClick={onPlay}
                                className='absolute inset-0 flex items-center justify-center cursor-pointer'
                            >
                                <div className='flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20 bg-first rounded-full play-icon hover:scale-110 transition-transform duration-300'>
                                    <Image src="/assets/images/shopify/play-icon.svg" alt="Play" width={25} height={25} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// Reviewer icon components
const FounderIcon = () => (
    <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 23.5C0 10.5213 10.5213 0 23.5 0C36.4787 0 47 10.5213 47 23.5C47 36.4787 36.4787 47 23.5 47C10.5213 47 0 36.4787 0 23.5Z" fill="#F04438" />
        <g clipPath="url(#clip0_40000352_959)">
            <path d="M14.167 29.1475L17.7063 26.4453C19.5867 28.8912 21.5846 30.0186 23.8083 30.0186C26.0202 30.0186 27.9616 28.9046 29.7573 26.4779L33.3471 29.1149C30.7562 32.6142 27.5365 34.4631 23.8083 34.4631C20.0921 34.4631 16.8412 32.6261 14.167 29.1475Z" fill="white" />
            <path d="M23.3788 17.402L17.079 22.8123L14.167 19.4464L23.3921 11.5234L32.5444 19.4523L29.619 22.8064L23.3788 17.402Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_40000352_959">
                <rect width="24" height="24" fill="white" transform="translate(11.5 11.5)" />
            </clipPath>
        </defs>
    </svg>
);

const AudioIcon = () => (
    <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 23.5C0 10.5213 10.5213 0 23.5 0C36.4787 0 47 10.5213 47 23.5C47 36.4787 36.4787 47 23.5 47C10.5213 47 0 36.4787 0 23.5Z" fill="#365563" />
        <path d="M20.5 14.5V32.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 18.5V28.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23.5 17.5V29.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.5 20.5V26.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.5 18.5V28.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32.5 22.5V24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 22.5V24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Video reviews data
const videoReviews = [
    {
        id: 1,
        youtubeVideoId: "ttQ-pMXMC9Y",
        thumbnail: "/assets/images/renzo.webp",
        reviewTextNL: `Hoi, mijn naam is Renzo, ik ben 21 jaar oud en eh ja ik had een probleem op Shopify met mijn webshop met eh een bundel een bundel sectie. En eh ja het best wel een complex probleem, ik kwam er zelf niet uit. En eh ben via een connectie van mij bij eh Jakarea terechtgekomen. Eh de samenwerking die vond ik erg fijn want hij nam goed de tijd voor je om ehm om bijvoorbeeld te bellen, niet alles over eh de app te doen, want zo kan je veel beter communiceren, dus de communicatie was erg goed. Ook ehm was was de prijs die we af hadden gesproken eh qua wat die moest doen ook erg erg eh erg erg goed, ben ik zeker tevreden mee. Dus eh ja, als je een probleem hebt op Shopify of ergens anders dan kan Jakarea en zijn team denk ik zeker wel helpen. Dus bij deze bedankt voor al jullie hulp en eh nou de samenwerking geef ik wel een eh een acht. Dus eh ja, als je een probleem hebt, je weet ze te vinden.`,
        reviewTextEN: `Hi, my name is Renzo, I am 21 years old and uh yeah I had a problem on Shopify with my webshop involving uh a bundle... a bundle section. And uh yeah it was quite a complex problem, I couldn't figure it out myself. And uh via a connection of mine I actually ended up with uh Jakarea. Uh the collaboration, I found it really nice because he took good time for you to uhm to for example call, not just do everything via uh the app, because that way you can communicate much better, so the communication was very good. Also uhm was... was the price that we had agreed on uh regarding what he had to do also very very uh very very good, I am certainly satisfied with that. So uh yes, if you have a problem on Shopify or anywhere else really, then Jakarea and his team can I think certainly help you out. So hereby thanks for all your help and uh well the collaboration I give a uh an eight. So uh yeah, if you have a problem, you know where to find them.`,
        reviewerName: "Renzo",
        reviewerRole: "Shopify Merchant",
        reviewerIcon: <FounderIcon />
    },
    {
        id: 2,
        youtubeVideoId: "6C4iSyu4Emk",
        thumbnail: "/assets/images/jeff.webp",
        reviewTextNL: `Hoi, ik ben Jeffrey, ik ben eigenaar van Kitchen Numbers. Wij werken momenteel al een jaar samen met eh Jakarea van Giopio.<br />Jakarea is momenteel ehm... volledig commit, los van al zijn side jobs en andere jobs die die heeft, tot Kitchen Numbers. Begrijpt onze visie volledig.<br />Ehm, wij zijn een startup. Ehm, doen dat vanuit ons eigen centen naast onze vaste job. Dus je kan begrijpen dat financiën wellicht soms wel even een struggle kunnen zijn. Ehm, iets waar je geen zorgen om hoeft te maken bij eh Jakarea.<br />Ehm, volledig commit. Ehm, begrijpt snel, begrijpt de visie snel. Wat wonderbaarlijk is, want wat wij eh... wij spreken de horeca aan. Nou ja, Giopio is een eh... Giopio is een bedrijf wat gewoon hè, developed in in websites en apps.<br />Ehm, wat mij dus heel erg aanspreekt is zijn commitment op iets waarvan je zou zeggen van nou ja, eh hier moet je verstand van hebben. Eh hij leert dus snel. <br />Ehm, prijs-kwaliteitverhouding... Geweldig. Ik raad iedereen aan om met Jakarea samen te werken. Kan niet anders dan goedkomen. Succes.`,
        reviewTextEN: `Hi, I'm Jeffrey, I am the owner of Kitchen Numbers. We have currently been working together with uh Jakarea from Giopio for a year.<br />Jakarea is currently uhm... fully committed, apart from all his side jobs and other jobs he has, to Kitchen Numbers. Understands our vision entirely.<br />Uhm, we are a startup. Uh, doing this from our own pockets next to our regular job. So you can understand that finances might well sometimes be a bit of a struggle. Uhm, something you don't have to worry about with uh Jakarea.<br />Uhm, fully committed. Uh, understands fast, grasps the vision fast. Which is amazing, because what we uh... we target the hospitality industry. Well yes, Giopio is a uh... Giopio is a company that just, right, develops in in websites and apps.<br />Uhm, so what really appeals to me is his commitment to something where you would say like well yeah, uh you need to have understanding of this. Uh so he learns fast.<br />Uhm, price-quality ratio... Amazing. I advise everyone to work together with Jakarea. It's bound to turn out well. Good luck.`,
        reviewerName: "Jeffrey",
        reviewerRole: "Kitchen Numbers",
        reviewerIcon: <FounderIcon />
    },
    {
        id: 3,
        youtubeVideoId: "tkPF4pFiryM",
        thumbnail: "/assets/images/shopify/sem.webp",
        reviewTextNL: `Dames en heren, mijn naam is Sem, eigenaar van Exclusive Car Detailing. Ik heb mijn website laten maken door Zakaria van Giopio. Ik ben er erg tevreden mee. Hij heeft binnen een korte termijn een zeer mooie website opgezet. Prijs-kwaliteitverhouding is het een hele goede aankoop geweest. Hij heeft mooie plugins ingemaakt, mooie animaties. Ik ben zeer tevreden. De communicatie met Zakaria was goed. Hij was eigenlijk altijd online. En als ik dingen wou weten, hoe het proces liep, of hij moest dingen weten, plannen we gewoon een call in en toen konden we gewoon alles goed bespreken. Ik ben zeer tevreden en ik wil Zakaria nogmaals bedanken. Ik eh ben bij hem gekomen via een klant. Een klant heeft hem aangeraden. En het was eh zeker een goede aankoop.`,
        reviewTextEN: `Ladies and gentlemen, my name is Sem, owner of Exclusive Car Detailing. I had my website built by Zakaria from the agency Giopio. I am very satisfied with it. Within a short time frame, he has set up a very beautiful website. Price-quality ratio wise it has been a really very good purchase. He built in nice plugins, nice animations. I am highly satisfied. The communication with Zakaria was good. He was actually always online. And if I wanted to know things, how the process went, or he had to know things, we just scheduled a call and then we could just discuss everything well. I am very satisfied and I want to thank Zakaria once again. I uh came to him via a client. A client recommended him to me. And it was uh certainly a good purchase.`,
        reviewerName: "Sem Segers",
        reviewerRole: " Exclusive Car Detailing",
        reviewerIcon: <FounderIcon />
    }
];

export default function Review() {
    // Track which video is currently playing (null means none)
    const [activeVideoId, setActiveVideoId] = useState(null);

    const handlePlayVideo = useCallback((videoId) => {
        setActiveVideoId(videoId);
    }, []);

    const handleVideoEnd = useCallback(() => {
        setActiveVideoId(null);
    }, []);

    return (
        <>
            <section className="w-full py-16 relative md:pt-20 xl:pt-32 xl:pb-[102px]">
                <div className="container">
                    <div className="text-center">
                        <div className="flex items-center gap-x-3 justify-center">
                            <h1
                                className="text-stroke text-[30px] font-extrabold leading-[120%] sm:text-[43px] md:text-[65px] lg:text-[82px] uppercase xl:font-black">UNFILTERED </h1>

                            <h2
                                className="text-[30px] font-extrabold leading-[120%] text-first sm:text-[43px] md:text-[65px]">
                                EVIDENCE
                            </h2>
                        </div>

                        <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-[#E9EAEB] sm:text-base dark:text-[#E9EAEB]anim lg:text-xl lg:max-w-[60%] lg:mx-auto">
                            No scripts, no studio lights. Just raw feedback from Dutch founders recording from their phones after seeing their revenue grow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Reviews Section */}
            <section className="w-full relative">
                <div className="container">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-7">
                        {/* Render video review cards in specific order: Jeffrey (id=2), Sem (id=3), Renzo (id=1) */}
                        {videoReviews
                            .filter(review => [2, 3, 1].includes(review.id))
                            .sort((a, b) => {
                                const order = { 2: 0, 3: 1, 1: 2 };
                                return order[a.id] - order[b.id];
                            })
                            .map((review) => (
                                <VideoReviewCard
                                    key={review.id}
                                    youtubeVideoId={review.youtubeVideoId}
                                    thumbnail={review.thumbnail}
                                    reviewTextNL={review.reviewTextNL}
                                    reviewTextEN={review.reviewTextEN}
                                    reviewerName={review.reviewerName}
                                    reviewerRole={review.reviewerRole}
                                    reviewerIcon={review.reviewerIcon}
                                    isPlaying={activeVideoId === review.id}
                                    onPlay={() => handlePlayVideo(review.id)}
                                    onVideoEnd={handleVideoEnd}
                                />
                            ))} 

                        {/* Text + Stats Row */}
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7'>
                            <div className='w-full text-start flex justify-between flex-col h-full bg-black border border-[#252B37] rounded-[4px] p-5 lg:p-6'>
                                <p className='text-sm lg:text-base text-[#D5D7DA] font-normal font-manrope'>
                                    We were terrified of the new GDPR rules. Giopio set up Server-Side tracking and Consent Mode V2 flawlessly. We recovered about 40% of our ad data that was being blocked. The peace of mind is worth every cent.
                                </p>

                                <div className="flex items-center justify-between gap-x-4 mt-4 lg:mt-0">
                                    <div className="order-2">
                                        <AudioIcon />
                                    </div>
                                    <div>
                                        <h5 className='text-white font-medium text-base lg:text-lg font-onest'>
                                            Sarah Williams
                                        </h5>
                                        <h6 className='text-sm lg:text-base text-[#D5D7DA] font-medium font-manrope mt-0.5'>
                                            ✅ Marketing Director
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full text-start bg-black border border-[#252B37] rounded-[4px]'>

                                <div className="relative w-full h-[225px]">
                                    <Image
                                        src="/assets/images/shopify/review-1.png"
                                        alt="review"
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="p-5 lg:p-6">
                                    <h4 className="text-white font-semibold text-xl lg:text-[42px] my-2 lg:my-3 font-onest">6.2 hours</h4>
                                    <p className='text-sm lg:text-base text-[#D5D7DA] font-normal font-manrope'>
                                        Average time saved per proposal
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Text + Stats Row 2 */}
                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7'>
                            <div className='w-full text-start flex justify-between flex-col h-full bg-black border border-[#252B37] rounded-[4px] p-5 lg:p-6'>
                                <p className='text-sm lg:text-base text-[#D5D7DA] font-normal font-manrope'>
                                    We were terrified of the new GDPR rules. Giopio set up Server-Side tracking and Consent Mode V2 flawlessly. We recovered about 40% of our ad data that was being blocked. The peace of mind is worth every cent.
                                </p>

                                <div className="flex items-center justify-between gap-x-4 mt-4 lg:mt-0">
                                    <div className="order-2">
                                        <AudioIcon />
                                    </div>
                                    <div>
                                        <h5 className='text-white font-medium text-base lg:text-lg font-onest'>
                                            Sarah Williams
                                        </h5>
                                        <h6 className='text-sm lg:text-base text-[#D5D7DA] font-medium font-manrope mt-0.5'>
                                            ✅ Marketing Director
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full text-start bg-black border border-[#252B37] rounded-[4px]'>

                                <div className="relative w-full h-[225px]">
                                    <Image
                                        src="/assets/images/shopify/review-1.png"
                                        alt="review"
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="p-5 lg:p-6">
                                    <h4 className="text-white font-semibold text-xl lg:text-[38px] my-2 lg:my-3 font-onest">Top Rated</h4>
                                    <p className='text-sm lg:text-base text-[#D5D7DA] font-normal font-manrope'>
                                        50+ Client Handel
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* platform review */}
            <section className="w-full py-20 relative md:py-[86px] xl:py-[150px]" id="aboutSection">
                <div className="container">

                    <div className="relative text-center mb-10 lg:mb-[60px]">
                        <h2 className="text-2xl font-semibold text-white md:text-[34px] xl:text-[48px] leading-[140%] font-onest">Proven Track Record Across Platforms</h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-7'>
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#252B37] p-3 xl:p-6 relative group anim bg-[#101828] anim flex flex-col justify-between lg:min-h-[380px]
                             dark:bg-[#101828] dark:border-[#252B37]">
                            <div className="relative z-40 mb-4 lg:mb-0">
                                <h4 className="text-xl xl:text-2xl font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0004 23.0323L10.4671 26.3656C10.2227 26.5212 9.96711 26.5878 9.70044 26.5656C9.43377 26.5434 9.20044 26.4545 9.00044 26.299C8.80044 26.1434 8.64488 25.9492 8.53377 25.7163C8.42266 25.4834 8.40044 25.2221 8.4671 24.9323L9.93377 18.6323L5.03377 14.399C4.81155 14.199 4.67288 13.971 4.61777 13.715C4.56266 13.459 4.57911 13.2092 4.66711 12.9656C4.75511 12.7221 4.88844 12.5221 5.06711 12.3656C5.24577 12.2092 5.49022 12.1092 5.80044 12.0656L12.2671 11.499L14.7671 5.56563C14.8782 5.29896 15.0507 5.09896 15.2844 4.96562C15.5182 4.83229 15.7569 4.76562 16.0004 4.76562C16.244 4.76563 16.4827 4.83229 16.7164 4.96562C16.9502 5.09896 17.1227 5.29896 17.2338 5.56563L19.7338 11.499L26.2004 12.0656C26.5115 12.1101 26.756 12.2101 26.9338 12.3656C27.1115 12.5212 27.2449 12.7212 27.3338 12.9656C27.4227 13.2101 27.4395 13.4603 27.3844 13.7163C27.3293 13.9723 27.1902 14.1998 26.9671 14.399L22.0671 18.6323L23.5338 24.9323C23.6004 25.2212 23.5782 25.4825 23.4671 25.7163C23.356 25.9501 23.2004 26.1443 23.0004 26.299C22.8004 26.4536 22.5671 26.5425 22.3004 26.5656C22.0338 26.5887 21.7782 26.5221 21.5338 26.3656L16.0004 23.0323Z" fill="#F2B823" />
                                    </svg>
                                    5.0/5.0
                                </h4>

                                <p
                                    className={`mt-3.5 lg:mt-5 font-manrope text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    Highly technical team. Solved a complex GTM issue no one else could find. They know their stuff
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <h5 className="text-base xl:text-lg font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    Google Business Client
                                </h5>

                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="white" />
                                    <g clipPath="url(#clip0_40000360_329)">
                                        <path d="M33.7138 22.2242C33.7138 21.2409 33.634 20.5234 33.4614 19.7793H22.2334V24.2173H28.824C28.6911 25.3202 27.9736 26.9811 26.3791 28.0972L26.3567 28.2458L29.9068 30.996L30.1528 31.0205C32.4116 28.9344 33.7138 25.8649 33.7138 22.2242Z" fill="#4285F4" />
                                        <path d="M22.2335 33.9178C25.4623 33.9178 28.173 32.8548 30.1529 31.0211L26.3792 28.0978C25.3693 28.8021 24.014 29.2937 22.2335 29.2937C19.0711 29.2937 16.387 27.2076 15.4302 24.3242L15.29 24.3361L11.5986 27.193L11.5503 27.3271C13.5168 31.2337 17.5562 33.9178 22.2335 33.9178Z" fill="#34A853" />
                                        <path d="M15.4304 24.3248C15.178 23.5807 15.0318 22.7834 15.0318 21.9596C15.0318 21.1357 15.178 20.3385 15.4171 19.5944L15.4104 19.4359L11.6728 16.5332L11.5505 16.5914C10.74 18.2125 10.2749 20.0329 10.2749 21.9596C10.2749 23.8863 10.74 25.7066 11.5505 27.3277L15.4304 24.3248Z" fill="#FBBC05" />
                                        <path d="M22.2335 14.624C24.4791 14.624 25.9938 15.594 26.8575 16.4046L30.2326 13.1093C28.1598 11.1826 25.4623 10 22.2335 10C17.5562 10 13.5168 12.6841 11.5503 16.5906L15.4169 19.5936C16.387 16.7102 19.0711 14.624 22.2335 14.624Z" fill="#EB4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_40000360_329">
                                            <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#252B37] p-3 xl:p-6 relative group anim bg-[#101828] anim flex flex-col justify-between lg:min-h-[380px]
                             dark:bg-[#101828] dark:border-[#252B37]">
                            <div className="relative z-40 mb-4 lg:mb-0">
                                <h4 className="text-xl xl:text-2xl font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0004 23.0323L10.4671 26.3656C10.2227 26.5212 9.96711 26.5878 9.70044 26.5656C9.43377 26.5434 9.20044 26.4545 9.00044 26.299C8.80044 26.1434 8.64488 25.9492 8.53377 25.7163C8.42266 25.4834 8.40044 25.2221 8.4671 24.9323L9.93377 18.6323L5.03377 14.399C4.81155 14.199 4.67288 13.971 4.61777 13.715C4.56266 13.459 4.57911 13.2092 4.66711 12.9656C4.75511 12.7221 4.88844 12.5221 5.06711 12.3656C5.24577 12.2092 5.49022 12.1092 5.80044 12.0656L12.2671 11.499L14.7671 5.56563C14.8782 5.29896 15.0507 5.09896 15.2844 4.96562C15.5182 4.83229 15.7569 4.76562 16.0004 4.76562C16.244 4.76563 16.4827 4.83229 16.7164 4.96562C16.9502 5.09896 17.1227 5.29896 17.2338 5.56563L19.7338 11.499L26.2004 12.0656C26.5115 12.1101 26.756 12.2101 26.9338 12.3656C27.1115 12.5212 27.2449 12.7212 27.3338 12.9656C27.4227 13.2101 27.4395 13.4603 27.3844 13.7163C27.3293 13.9723 27.1902 14.1998 26.9671 14.399L22.0671 18.6323L23.5338 24.9323C23.6004 25.2212 23.5782 25.4825 23.4671 25.7163C23.356 25.9501 23.2004 26.1443 23.0004 26.299C22.8004 26.4536 22.5671 26.5425 22.3004 26.5656C22.0338 26.5887 21.7782 26.5221 21.5338 26.3656L16.0004 23.0323Z" fill="#F2B823" />
                                    </svg>
                                    5.0/5.0
                                </h4>

                                <p
                                    className={`mt-3.5 lg:mt-5 font-manrope text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    10+ Enterprise Projects "The best Laravel/React developers we've hired. Perfect execution, clear communication, and on-time delivery.
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <h5 className="text-base xl:text-lg font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    Upwork Enterprise Client
                                </h5>

                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="#12B76A" />
                                    <g clipPath="url(#clip0_40000360_348)">
                                        <path d="M28.5625 23.1559C27.4608 23.1559 26.4257 22.6909 25.4882 21.9297L25.7147 20.8557L25.7222 20.8129C25.9292 19.6722 26.5697 17.7544 28.5618 17.7544C30.0543 17.7544 31.2648 18.9657 31.2648 20.4574C31.2648 21.9454 30.0535 23.1567 28.5618 23.1567L28.5625 23.1559ZM28.5625 15.0192C26.0238 15.0192 24.0505 16.6677 23.2502 19.3827C22.0315 17.5504 21.1015 15.3477 20.563 13.4922H17.8285V20.6052C17.8247 22.0114 16.6877 23.1484 15.2815 23.1522C13.8752 23.1484 12.7383 22.0077 12.7345 20.6052V13.4922H10V20.6052C10 23.5189 12.3707 25.9062 15.2815 25.9062C18.1952 25.9062 20.563 23.5197 20.563 20.6052V19.4134C21.094 20.5189 21.7465 21.6439 22.5392 22.6362L20.8637 30.5074H23.6605L24.8755 24.7962C25.9382 25.4757 27.1607 25.9054 28.5632 25.9054C31.5632 25.9054 34.0007 23.4522 34.0007 20.4559C34.0007 17.4559 31.5632 15.0184 28.5632 15.0184L28.5625 15.0192Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_40000360_348">
                                            <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                                        </clipPath>
                                    </defs>
                                </svg>  
                            </div>
                        </div>
                        {/* card */}
                        {/* card */}
                        <div
                            className="w-full rounded-[4px] border border-[#252B37] p-3 xl:p-6 relative group anim bg-[#101828] anim flex flex-col justify-between lg:min-h-[380px]
                             dark:bg-[#101828] dark:border-[#252B37]">
                            <div className="relative z-40 mb-4 lg:mb-0">
                                <h4 className="text-xl xl:text-2xl font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0004 23.0323L10.4671 26.3656C10.2227 26.5212 9.96711 26.5878 9.70044 26.5656C9.43377 26.5434 9.20044 26.4545 9.00044 26.299C8.80044 26.1434 8.64488 25.9492 8.53377 25.7163C8.42266 25.4834 8.40044 25.2221 8.4671 24.9323L9.93377 18.6323L5.03377 14.399C4.81155 14.199 4.67288 13.971 4.61777 13.715C4.56266 13.459 4.57911 13.2092 4.66711 12.9656C4.75511 12.7221 4.88844 12.5221 5.06711 12.3656C5.24577 12.2092 5.49022 12.1092 5.80044 12.0656L12.2671 11.499L14.7671 5.56563C14.8782 5.29896 15.0507 5.09896 15.2844 4.96562C15.5182 4.83229 15.7569 4.76562 16.0004 4.76562C16.244 4.76563 16.4827 4.83229 16.7164 4.96562C16.9502 5.09896 17.1227 5.29896 17.2338 5.56563L19.7338 11.499L26.2004 12.0656C26.5115 12.1101 26.756 12.2101 26.9338 12.3656C27.1115 12.5212 27.2449 12.7212 27.3338 12.9656C27.4227 13.2101 27.4395 13.4603 27.3844 13.7163C27.3293 13.9723 27.1902 14.1998 26.9671 14.399L22.0671 18.6323L23.5338 24.9323C23.6004 25.2212 23.5782 25.4825 23.4671 25.7163C23.356 25.9501 23.2004 26.1443 23.0004 26.299C22.8004 26.4536 22.5671 26.5425 22.3004 26.5656C22.0338 26.5887 21.7782 26.5221 21.5338 26.3656L16.0004 23.0323Z" fill="#F2B823" />
                                    </svg>
                                    5.0/5.0
                                </h4>

                                <p
                                    className={`mt-3.5 lg:mt-5 font-manrope text-sm xl:text-base font-normal leading-7 tracking-[-1%] text-third group-hover:text-white anim  dark:text-d-fifth`}>
                                    30+ Completed Orders "Fast, compliant, and delivered ahead of schedule. Giopio is my go-to for quick Shopify fixes.
                                </p>
                            </div>

                            <div className="flex justify-between items-center">
                                <h5 className="text-base xl:text-lg font-onest font-semibold leading-8 text-second group-hover:text-white anim dark:text-white flex items-center gap-x-2">
                                    Fiverr Pro Buyer
                                </h5>

                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="#32D583" />
                                    <path d="M33.004 25.5881C33.1347 25.5882 33.2641 25.5626 33.3848 25.5128C33.5056 25.4629 33.6154 25.3897 33.7079 25.2974C33.8004 25.2051 33.8738 25.0955 33.9239 24.9748C33.974 24.8541 33.9999 24.7248 34 24.5941C34.0001 24.4634 33.9745 24.334 33.9246 24.2133C33.8748 24.0925 33.8016 23.9827 33.7093 23.8902C33.617 23.7978 33.5074 23.7244 33.3867 23.6742C33.266 23.6241 33.1367 23.5982 33.006 23.5981C32.7421 23.5978 32.4889 23.7024 32.3021 23.8888C32.1153 24.0752 32.0103 24.3282 32.01 24.5921C32.0097 24.856 32.1143 25.1092 32.3007 25.296C32.4871 25.4828 32.7401 25.5878 33.004 25.5881ZM32.008 21.8831H31.158C30.612 21.8831 30.318 22.2931 30.318 22.9751V25.4411H28.708V21.8831H28.024C27.477 21.8831 27.184 22.2931 27.184 22.9751V25.4411H25.574V20.5671H27.184V21.3071C27.448 20.7331 27.81 20.5671 28.347 20.5671H30.319V21.3071C30.583 20.7331 30.944 20.5671 31.481 20.5671H32.008V21.8831ZM25.222 23.3841H21.863C21.951 23.9301 22.293 24.2421 22.869 24.2421C23.299 24.2421 23.601 24.0671 23.699 23.7551L25.124 24.1551C24.773 25.0031 23.904 25.5191 22.869 25.5191C21.121 25.5191 20.32 24.1641 20.32 23.0041C20.32 21.8641 21.023 20.4991 22.77 20.4991C24.626 20.4991 25.241 21.8831 25.241 22.9071C25.241 23.1311 25.231 23.2771 25.221 23.3841H25.222ZM23.66 22.4391C23.62 22.0191 23.318 21.6291 22.771 21.6291C22.263 21.6291 21.961 21.8541 21.863 22.4391H23.66ZM17.508 25.4401H18.924L20.691 20.5661H19.071L18.211 23.4031L17.333 20.5661H15.72L17.508 25.4401ZM10.908 25.4401H12.51V21.8821H14.034V25.4401H15.625V20.5661H12.51V20.2641C12.51 19.9321 12.745 19.7281 13.116 19.7281H14.034V18.4121H12.85C11.688 18.4121 10.907 19.1241 10.907 20.1671V20.5671H10V21.8831H10.908V25.4411V25.4401Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        {/* card */}
                    </div>
                </div>
            </section>
        </>
    );
}