/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { NewsSlider } from "./NewsSlider";
import { Clock, MessageCircle } from "lucide-react";
export default function MainArticle() {
  return (
    <>
    <NewsSlider/>
     <article className=" lg:col-span-2 relative  bg-white shadow ">
      {/* IMAGE */}
      <div className="relative  w-full h-[240px] sm:h-[298px] md:h-[300px] xl:h-[400px] border border-black">
        <Image
          src="/assets/police.jpg"
          alt="featured"
          fill
          priority
          className=" bg-white"
        />
      </div>

      {/* OVERLAY CARD */}
      <div
        className="
          bg-white
        
          py-4 px-4 lg:px-8
        
          absolute
          left-1/2
          -translate-x-1/2
          bottom-6
          w-[92%]
          md:w-[92%]
          xl:w-[92%] 
        "
      >
        <span className="text-xs uppercase text-gray-500 hover:text-[#212121] cursor-pointer tracking-wide font-roboto">
          Politics
        </span>

        <h2 className="text-[16px] md:text-[18px] xl:text-[28px] font-bold mt-2 leading-snug text-[#000] font-condensed">
          'Election was rigged' says opposition, police confirm three dead
        </h2>
    <div className="flex gap-3 text-[10px] lg:text-[11px] text-[#a0a0a0] cursor-pointer font-medium">
 <p className=" text-gray-500 mt-2">
         <span className="italic font-pserif">by <span className="font-semibold text-black uppercase not-italic font-roboto">John Doe</span> and 1 others</span>  
        </p>
        <div className=" text-gray-500 mt-2 flex gap-1 font-roboto"><Clock className="w-3 h-3 mt-0.5"/> <p> February 17, 2020</p></div>

        <div className=" text-gray-500 mt-2 flex gap-1 font-roboto"><MessageCircle className="w-3 h-3 mt-0.5"/> <p className="font-semibold">0</p></div>
    </div>
       

        <p className="text-[14px] md:text-[12px] lg:text-[14px] text-[#666] font-pserif mt-3 leading-relaxed">
          When we get out of the glass bottle of our ego and when we escape
          like the squirrels in the...
        </p>

        <button className="mt-4 text-[11px] border px-4 py-2 uppercase tracking-wider shadow border-gray-300 hover:border-black font-roboto hover:bg-black text-gray-600 hover:text-white transition duration-300">
          Read More
        </button>
      </div>

      {/* SPACE FOR OVERLAP */}
      <div className="h-52 sm:h-40 md:h-52 lg:h-52 xl:h-56"></div>
    </article>
    </>
  );
}