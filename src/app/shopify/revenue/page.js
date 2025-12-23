import DataDontLie from "../../shopify-component/DataDontLie";
import meta from "../../../../data/meta/home.json" 
export const metadata = {
  ...meta
};

export default function Shopify() {
  return (
    <>
      {/* hero */}
      <section className="w-full pt-16 relative md:pt-20 xl:pt-32 xl:pb-[102px]">
                <div className="container">
                    <div className="text-center"> 
                        <h1
                            className="text-[30px] font-extrabold text-white sm:text-[60px] md:text-[70px] md:mt-3 lg:text-[82px] leading-[120%]">
                                STOP LOSING REVENUE TO POOR CODE.
                            </h1>

                        <p className="mt-6 lg:mt-8 text-sm text-center font-normal leading-[21px] text-[#E9EAEB] sm:text-base dark:text-[#E9EAEB]anim lg:text-xl lg:max-w-[80%] lg:mx-auto">
                           We don't use automated bots. Our Senior Laravel Engineers manually analyze your theme’s Liquid code, Mobile Speed, and GDPR gaps to find hidden revenue leaks.</p>
                    </div>
                </div>
            </section>
 
     <DataDontLie />

     {/* emerygency cpacity low */}
     <div className="w-full mt-5 lg:mt-8">
        <div className="container">
            <div className="bg-[#F790091A] border-2 border-[#FFA666] py-8 px-8 lg:py-[62px] lg:px-[120px] rounded-[4px] flex justify-center items-center flex-col">

                {/* svg */}
                <svg className="w-16 lg:w-[120px] lg:h-[120px]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.624 105H50.376C27.2238 105 15.6477 105 11.3818 97.4695C7.11584 89.9395 13.0368 79.957 24.8787 59.9925L34.5028 43.7667C45.8779 24.5889 51.5655 15 60 15C68.4345 15 74.122 24.5888 85.497 43.7666L95.1215 59.9925C106.963 79.957 112.884 89.9395 108.618 97.4695C104.352 105 92.776 105 69.624 105Z" stroke="#FF9040" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60 85V62.5" stroke="#FF9040" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60 44.9914V44.9414" stroke="#FF9040" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {/* svg */}

                <h2 className="text-white font-semibold font-onest text-2xl md:text-3xl lg:text-[48px] mb-3.5 lg:mb-5 mt-5 md:mt-8 lg:mt-[42px] text-center">Engineering capacity: Low</h2>
                <p className="font-medium text-[#E9EAEB] text-sm md:text-base lg:text-lg font-manrope text-center lg:max-w-[80%] mx-auto">Due to the manual depth of our code review (approx. 2 hours per audit), we can only accept 5 applications this week. We prioritize active brands doing €10k+/mo.</p>


            </div>
        </div>
     </div>


     {/* application form */}
     <section className="w-full py-20 relative md:pt-[10px] xl:py-[162px]">
        <div className="container">
            <div className='text-center grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-6 items-stat xl:gap-x-8'>
                <div className='w-full relative lg:col-span-5 flex items-center justify-center'>
                    <img src="/assets/images/shopify/person.png" alt="Person" className='w-full h-full object-cover' />
                </div>
                <div className='w-full lg:col-span-7 text-start font-onest'>
                    <h2 className='font-semibold text-2xl md:text-[34px] lg:text-[48px] text-white leading-[140%]'>
                        The Application Form
                    </h2>
                    <form className="w-full mt-6 md:mt-8 lg:mt-10 flex flex-col gap-y-5 lg:gap-y-7">
                        <div className="w-full flex flex-col gap-y-2.5">
                            <label htmlFor="url" className="block w-full font-semibold text-sm lg:text-lg text-white font-onest">Store URL:</label>
                            <input type="text" name="url" id="url" placeholder="Your URL here" className="rounded-[4px] bg-[#252B37] border border-[#414651] px-3 lg:px-5 py-2 lg:py-5 font-normal text-white text-sm placeholder:text-[#717680] font-manrope" />
                        </div> 
                        <div className="w-full flex flex-col gap-y-2.5">
                            <label htmlFor="month" className="block w-full font-semibold text-sm lg:text-lg text-white font-onest">Monthly Revenue:</label>
                          
                            <select name="month" id="month" className="rounded-[4px] bg-[#252B37] border border-[#414651] px-3 lg:px-5 py-2 lg:py-5 font-normal text-white text-sm placeholder:text-[#717680] font-manrope">
                                <option>Select</option>
                                <option>$1000 - $2000</option>
                                <option>$2000 - $3000</option>
                                <option>$3000 - $4000</option>
                                <option>$4000 - $5000</option>
                            </select>
                        </div> 
                        <div className="w-full flex flex-col gap-y-2.5">
                            <label htmlFor="primary" className="block w-full font-semibold text-sm lg:text-lg text-white font-onest">Primary Technical Blocker:</label>
                          
                            <select name="primary" id="primary" className="rounded-[4px] bg-[#252B37] border border-[#414651] px-3 lg:px-5 py-2 lg:py-5 font-normal text-white text-sm placeholder:text-[#717680] font-manrope">
                                <option>Select</option>
                                <option>$1000 - $2000</option>
                                <option>$2000 - $3000</option>
                                <option>$3000 - $4000</option>
                                <option>$4000 - $5000</option>
                            </select>
                        </div> 
                         <div className="w-full flex flex-col gap-y-2.5">
                            <label htmlFor="email" className="block w-full font-semibold text-sm lg:text-lg text-white font-onest">Work Email:</label>
                            <input type="email" name="email" id="email" placeholder="Email here" className="rounded-[4px] bg-[#252B37] border border-[#414651] px-3 lg:px-5 py-2 lg:py-5 font-normal text-white text-sm placeholder:text-[#717680] font-manrope" />
                        </div> 
                        <div className="w-full flex flex-col gap-y-2.5">
                             <button type="submit" className="w-full block bg-[#FF9040] text-[#101828] font-medium text-base lg:text-lg py-2.5 lg:py-4 rounded-[4px] anim hover:bg-first/70">Get My Revenue Roadmap</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}