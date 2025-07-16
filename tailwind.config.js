/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1290px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.25rem',    
        sm: '1.5rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      keyframes: {
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 3s ease-in-out infinite',  
      },
      boxShadow: {
        'one': '0px 20px 30px 0px rgba(251, 100, 0, 0.15)',  
        'two': '0px 20px 20px 0px #26404C08',  
        'three': '0px 0px 10px 0px #00000040',   
        'four': '0px 4px 20px 0px #00000040', 
        'last': '0px 8px 16px 0px #337EEB4D',  
      },
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')",
        'main-body': "url('/assets/images/main-bg.svg')",
        'header-top': "url('/assets/images/header-bg.svg')",
        'header-top-dark': "url('/assets/images/header-bg-dark.svg')",
        'hero-large': "url('/assets/images/hero-xl-bg.svg')", 
        'header-top-about': "url('/assets/images/about-header-bg.svg')",
        'hero-large-about': "url('/assets/images/about-hero-large.svg')",
        'analysis': "url('/assets/images/ecommerce/analysis-xl-bg.webp')",  
        'customization': "url('/assets/images/ecommerce/bg-img.webp')",   
        'small-task': "url('/assets/images/ecommerce/small-task-xl-bg.webp')", 
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)'],  
        'tiro': ['var(--font-tiro)'],     
        'jakarta': ['var(--font-plus-jakarta)'],
        'aclonica': ['var(--font-aclonica)'],  
      },
      backgroundColor: {
        'first': '#FF9040',
        'second': '#26404C',
        'main': '#FEF9F5', 
        'deep': '#26404C', 
      }, 
      borderColor: {
        'first' : '#FF9040',
        'second' : '#26404C',
      },
      colors: {
        'first': '#FF9040',
        'second': '#26404C',
        'third': 'rgba(38, 64, 76, 0.8)',
        'fourth': 'rgba(38, 64, 76, 0.6)',
        'd-fifth': 'rgba(255, 255, 255, 0.8)',
        'd-sixth': 'rgba(255, 255, 255, 0.6)',
        'new': '#272020',
        'orange': '#FF9040',
        'sonali': '#F8AE4B',
        'deep': '#26404C'
      },
    },
  },
  plugins: [],
}

