import React from 'react';
import MainArticle from './MainArticle';
import bottom1 from "../../public/assets/bottom1.jpg";
import bottom2 from "../../public/assets/bottom2.jpg";
import { Clock } from "lucide-react";

import Image from 'next/image';

function NewsContent() {
    return (
        <>
      

      {/* Main Content Grid */}
      <div className="w-full mx-auto  py-8 border">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 border border-black">

          {/* Left Sidebar - Latest News */}
          <aside className="md:col-span-0 lg:col-span-3 order-2 lg:order-1">
            {/* <LatestNews /> */}
          </aside>


          {/* Main Content Area */}
          <main className=" border border-black md:col-span-8 md:order- lg:col-span-7 px-3 lg:px-5 lg:-ml-9 lg:mr-14 order-1 lg:order-2 xl:px-8">
            <MainArticle />

             {/* Secondary Articles Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
                {/* Card 1 */}
              <div className="group relative shadow bg-white h-full">
  <div className="relative overflow-hidden aspect-[4/3] mb-3 ">
    <Image
      src={bottom1}
      className="w-full h-full cursor-pointer"
      alt="thumb"
    />

    {/* Badge */}
    <span
      className="
        absolute
        bottom-0
        sm:bottom-0
        xl:bottom-0
        left-1/2
        -translate-x-1/2
        bg-[#3c7bd2]
        text-white
        text-[10px]
        font-bold
        px-1.5 xl:px-2 py-0.5
        uppercase
       cursor-pointer
        font-roboto
        shadow-md 
      "
    >
      Business
    </span>
  </div>

  <h3 className="font-condensed text-center pt-4 pb-2 px-8 md:px-2 lg:px-8 text-[16px] lg:text-[18px] font-bold leading-tight text-black cursor-pointer">
    Grab tackles Jakarta’s odd-even license plate policy with special algorithm
  </h3>

  <div className="font-roboto flex items-center justify-center text-[10px] lg:text-[11px] text-[#a0a0a0] gap-1 mt-2 pb-6 cursor-pointer">
    <Clock className="w-3 h-3" />
    <span>February 17, 2020</span>
  </div>
</div>

              {/* Card 2 */}
             <div className="group relative shadow bg-white h-full">
  <div className="relative overflow-hidden aspect-[4/3] mb-3 ">
    <Image
      src={bottom2}
      className="w-full h-full cursor-pointer"
      alt="thumb"
    />

    {/* Badge */}
    <span
      className="
        absolute
        bottom-0
        sm:bottom-0
        xl:bottom-0
        left-1/2
        -translate-x-1/2
        bg-[#de3535]
        text-white
        text-[10px]
        font-bold
        px-1.5 xl:px-2 py-0.5
        uppercase
       cursor-pointer
        font-roboto
        shadow-md 
      "
    >
      Politics
    </span>
  </div>

  <h3 className="font-condensed text-center pt-4 pb-2 px-8 md:px-2 lg:px-8 text-[16px] lg:text-[18px] font-bold leading-tight text-black cursor-pointer">
    Jokowi supporters try to prevent anti-Jokowi activist from entering Batam
  </h3>

  <div className="font-roboto flex items-center justify-center text-[10px] lg:text-[11px] text-[#a0a0a0] gap-1 mt-2 pb-6 cursor-pointer">
    <Clock className="w-3 h-3" />
    <span>August 10, 2018</span>
  </div>
</div>

              
            </div>
            
          
          </main>

         
        </div>
      </div>
    </>
    );
}

export default NewsContent;