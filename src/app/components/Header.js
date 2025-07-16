import Navbar from "./Navbar"

const Header = () => {
    return (
        <>
            {/* common component for all page */}
            <div id="mySVG">
                <img src="/assets/images/bg-float-light.svg" alt="light bg" className="anim ltd w-full h-full object-contain" />
                <img src="/assets/images/bg-float-light.svg" alt="dark bg" className="anim dtl w-full h-full object-contain" />
            </div>

            <div className="main-line-left"></div>
            <div className="main-line-02 hidden xl:block"></div>
            <div className="main-line-03 hidden xl:block"></div>
            <div className="main-line-04 hidden xl:block"></div>
            <div className="main-line-05 hidden xl:block"></div>
            <div className="main-line-right"></div>

             {/* common component for all page */}
            <header
                className="w-full bg-[#26404C0D] py-5 border-b border-[#E0E0E0] dark:border-second anim relative z-50 xl:bg-transparent xl:border-0 lg:pt-8 xl:pt-10 xl:pb-0">
                <div className="container">
                    <Navbar />
                </div>
            </header> 
        </>
    )}
export default Header