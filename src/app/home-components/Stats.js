'use client'
import React, { useEffect } from 'react'; 

const Stats = () => {

  return (
    <section className="w-full pt-16 relative md:pt-24 xl:hidden">
      <div className="container">
        <div className="grid grid-cols-3 items-center stats-container">
          <div className="text-center stat">
            <h4 className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] subscribers-odometer-2 odometer plus anim dark:text-white">
              90
            </h4>
            <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">Project Complete</p>
          </div>
          <div className="text-center stat">
            <h4 className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] videos-odometer-2 odometer plus anim dark:text-white">
              10
            </h4>
            <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">In Progress</p>
          </div>
          <div className="text-center stat">
            <h4 className="text-2xl font-medium text-second leading-8 mb-1 md:text-[32px] projects-odometer-2 odometer anim dark:text-white">
              20
            </h4>
            <p className="text-sm font-light text-fourth leading-5 anim dark:text-d-sixth">Client Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
