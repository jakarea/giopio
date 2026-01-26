'use client'
import { useState } from "react";
import CustomSelect from "../components/CustomSelect";

export default function RevenueForm() {
  const [formData, setFormData] = useState({
    url: '',
    month: '',
    primary: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.url || !formData.month || !formData.primary || !formData.email) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/revenue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ url: '', month: '', primary: '', email: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    setErrorMessage('');
  };

  const monthlyRevenueOptions = [
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000-3000', label: '$2,000 - $3,000' },
    { value: '3000-4000', label: '$3,000 - $4,000' },
    { value: '4000-5000', label: '$4,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-50000', label: '$25,000 - $50,000' },
    { value: '50000+', label: '$50,000+' }
  ];

  const technicalBlockerOptions = [
    { value: 'speed', label: 'Website Speed / Performance' },
    { value: 'mobile', label: 'Mobile Responsiveness' },
    { value: 'conversion', label: 'Conversion Rate Optimization' },
    { value: 'theme', label: 'Theme Customization' },
    { value: 'integrations', label: 'Third-party Integrations' },
    { value: 'checkout', label: 'Checkout Optimization' },
    { value: 'seo', label: 'SEO & Traffic' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <> 

      {/* emerygency cpacity low */}
      <div className="w-full mt-5 lg:mt-8">
        <div className="container">
          <div className="bg-[#F790091A] border-2 border-[#FFA666] py-8 px-8 lg:py-[62px] lg:px-[120px] rounded-[4px] flex justify-center items-center flex-col">

            {/* svg */}
            <svg className="w-16 lg:w-[120px] lg:h-[120px]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M69.624 105H50.376C27.2238 105 15.6477 105 11.3818 97.4695C7.11584 89.9395 13.0368 79.957 24.8787 59.9925L34.5028 43.7667C45.8779 24.5889 51.5655 15 60 15C68.4345 15 74.122 24.5888 85.497 43.7666L95.1215 59.9925C106.963 79.957 112.884 89.9395 108.618 97.4695C104.352 105 92.776 105 69.624 105Z" stroke="#FF9040" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M60 85V62.5" stroke="#FF9040" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M60 44.9914V44.9414" stroke="#FF9040" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
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
              <form className="w-full mt-6 md:mt-8 lg:mt-10 flex flex-col gap-y-6 lg:gap-y-8" onSubmit={handleSubmit}>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{errorMessage}</span>
                  </div>
                )}

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500 text-green-400 px-6 py-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">Application Received!</h4>
                        <p className="text-sm text-green-300/80">
                          Thank you for your interest. Our team will review your application and get back to you within 24-48 hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Form Fields - Hide when success */}
                {submitStatus !== 'success' && (
                  <>
                    <div className="group">
                      <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder="Store URL"
                        value={formData.url}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-b-2 border-white/20 bg-transparent block w-full pb-2 lg:pb-6 font-normal text-white text-base lg:text-xl placeholder:text-white/40 focus-visible:outline-none focus:border-[#FF9040] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <CustomSelect
                      label="Monthly Revenue:"
                      name="month"
                      options={monthlyRevenueOptions}
                      placeholder="Select revenue range"
                      value={formData.month}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />

                    <CustomSelect
                      label="Primary Technical Blocker:"
                      name="primary"
                      options={technicalBlockerOptions}
                      placeholder="Select your main challenge"
                      value={formData.primary}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />

                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="border-b-2 border-white/20 bg-transparent block w-full pb-2 lg:pb-6 font-normal text-white text-base lg:text-xl placeholder:text-white/40 focus-visible:outline-none focus:border-[#FF9040] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full block bg-[#FF9040] text-[#101828] font-semibold text-base lg:text-lg xl:text-xl py-3 lg:py-4 rounded-[4px] anim hover:bg-first/70 transition-all duration-300 hover:shadow-lg hover:shadow-first/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-[#101828]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          'Get My Revenue Roadmap'
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
