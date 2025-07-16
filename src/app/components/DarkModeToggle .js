'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else if (darkMode === 'disabled') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setDarkMode(false);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
  };

  return (
    <button
      type="button"
      id="toggleDarkMode"
      onClick={toggleDarkMode}
      className={`bg-[#26404C1A] shrink-0 dark:bg-[#FFFFFF1A] relative z-[999] inline-flex justify-center items-center w-10 h-10 rounded-full anim hover:!bg-first`}
    >
      <Image src="/assets/images/moon-icon.svg" alt="moon icon" className="ltd" width="16" height="16" />
      <Image src="/assets/images/sun-icon.svg" alt="sun icon" className="dtl" width="16" height="16" />
    </button>
  );
};

export default DarkModeToggle;
