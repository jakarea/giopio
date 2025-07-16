import Link from 'next/link'; 

const ShareButtons = ({ url, title }) => {   

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    const dribbbleShareUrl = `https://dribbble.com/shots/new?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

    return (
        <ul className="border border-[#26404C33] anim dark:border-d-fifth rounded-[50px] py-2 px-4 inline-flex items-center gap-x-2 xl:px-6 xl:py-4 xl:gap-x-6">
            <li>
                <p className="text-second font-medium text-sm xl:text-2xl dark:text-white anim">Share</p>
            </li>
            <li>
                <Link target='_blank' href={facebookShareUrl}>
                    <img src="/assets/images/social/facebook-c.svg" alt="Facebook" className="xl:w-6" />
                </Link>
            </li>
            <li>
                <Link target='_blank' href={twitterShareUrl}>
                    <img src="/assets/images/social/twitter-c.svg" alt="Twitter" className="xl:w-6" />
                </Link>
            </li>
            <li>
                <Link target='_blank' href={linkedinShareUrl}>
                    <img src="/assets/images/social/linkedin-c.svg" alt="LinkedIn" className="xl:w-6" />
                </Link>
            </li>
            <li>
                <Link target='_blank' href={dribbbleShareUrl}>
                    <img src="/assets/images/social/dribble-c.svg" alt="Dribbble" className="xl:w-6" />
                </Link>
            </li>
        </ul>
    );
};

export default ShareButtons;
