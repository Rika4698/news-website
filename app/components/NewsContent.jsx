import React from 'react';
import MainArticle from './MainArticle';
import bottom1 from "../../public/assets/bottom1.jpg";
import bottom2 from "../../public/assets/bottom2.jpg";
import right1 from "../../public/assets/green.jpg";
import right2 from "../../public/assets/right.jpg";
import { Clock } from "lucide-react";

import Image from 'next/image';

import { Opinion } from './Opinion';
import LatestNews from './LatestNews';

function NewsContent() {
  return (
    <>


      {/* Main Content Grid */}
      <div className="w-full mx-auto px-4  py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 md:gap-6 lg:gap-6 xl:gap-8 ">

          {/* Left Sidebar - Latest News */}
          <aside className=" col-span-1 order-2 md:col-span-6 md:order-3 lg:col-span-3 lg:order-1">
            <div className="mt-8 md:mt-0 lg:mt-14 xl:mt-36">
              <LatestNews />
              <div className="mt-8 hidden lg:block">
                <Opinion />
              </div>
            </div>
          </aside>



          {/* Main Content Area */}
          <main className=" col-span-1 order-1 md:col-span-8 md:order- lg:col-span-6   lg:order-2 ">
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

          {/* Opinion - Right (Mobile: 2nd, MD: 3rd right, LG: hidden) */}
          <aside className="order-2 md:col-span-6 md:order-3 lg:hidden">
            <div className="mt-8 md:mt-0 xl:mt-36">
              <Opinion />
            </div>
          </aside>


          {/* Right Sidebar */}
          <aside className="col-span-1 order-3 md:col-span-4 md:order-2 lg:col-span-3 lg:order-3 mt-8 md:mt-14 xl:mt-36 ">
            <div className='grid grid-cols-1 gap-8'>

              {/* Featured Card */}
              {/* Article 1 */}
              <div className="relative group bg-white shadow h-full">
                <div className="absolute top-4 left-4 z-10 bg-[#FFC107] text-white text-[10px] font-bold px-1 py-0.5 uppercase tracking-wider shadow-sm">
                  Opinion
                </div>
                <div className="overflow-hidden  w-full">
                  <Image
                    src={right1}
                    alt="Lifestyle"
                    width={400}
                    height={267}
                    className="  "
                  />

                </div>

                <div className='px-6 pt-4 pb-6'>
                  <h3 className="text-[18px] md:text-[18px] lg:text-[20px]  font-bold mt-2 leading-snug  text-[#000] font-condensed">
                    Democratic Party politician calls Prabowo ‘cardboard general’
                  </h3>
                  <div className="flex gap-3 text-[10px] lg:text-[11px] text-[#a0a0a0] cursor-pointer font-medium">
                    <p className=" text-gray-500 mt-2">
                      <span className="italic font-pserif">by <span className="font-semibold text-black uppercase not-italic font-roboto">John Doe</span></span>
                    </p>
                    <div className=" text-gray-500 mt-2 flex gap-1 font-roboto"> <Clock className="w-3 h-3 mt-0.5" /> <p>August 10, 2018</p></div>


                  </div>


                  <p className="text-[14px] md:text-[12px] lg:text-[14px] text-[#666] font-pserif mt-4 leading-relaxed font-medium">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...
                  </p>

                </div>
              </div>



              {/* Article 2 */}
              <div className="relative group bg-white shadow h-full">
                <div className="absolute top-4 left-4 z-10 bg-[#f46393] text-white text-[10px] font-bold px-1 py-1 uppercase tracking-wider shadow-sm font-roboto">
                  Lifestyle
                </div>

                <div className="overflow-hidden  w-full">
                  <Image
                    src={right2}
                    alt="Lifestyle"
                    width={400}
                    height={267}
                    className="  "
                  />

                </div>


                <div className='px-6 pt-4 pb-6'>
                  <h3 className="text-[18px] md:text-[18px] lg:text-[20px]  font-bold mt-2 leading-snug tracking-tight text-[#000] font-condensed">
                    Google tracks location data even when users turn service off
                  </h3>
                  <div className="flex gap-3 text-[10px] lg:text-[11px] text-[#a0a0a0] cursor-pointer font-medium">
                    <p className=" text-gray-500 mt-2">
                      <span className="italic font-pserif">by <span className="font-semibold text-black uppercase not-italic font-roboto">John Doe</span></span>
                    </p>
                    <div className=" text-gray-500 mt-2 flex gap-1 font-roboto"> <Clock className="w-3 h-3 mt-0.5" /> <p>August 14, 2018</p></div>


                  </div>


                  <p className="text-[14px] md:text-[12px] lg:text-[14px] text-[#666] font-pserif mt-4 leading-relaxed font-medium h-full">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...
                  </p>

                </div>



              </div>
            </div>

          </aside>


        </div>
      </div>
    </>
  );
}

export default NewsContent;