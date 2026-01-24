"use client";

import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/assets/air.jpg";
import img2 from "../../public/assets/fresh.jpg";
import img3 from "../../public/assets/phone.jpg";
import img4 from "../../public/assets/inter.jpg";
import img5 from "../../public/assets/friend.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Presidential Train Now Available For Jakartans Traveling To Bandung",
    image: img1,
  },
  {
    id: 2,
    title: "A Digital Media Startup Growing Up With Millennial Women",
    image: img2,
  },
  {
    id: 3,
    title: "Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting",
    image: img3,
  },
  {
    id: 4,
    title: "Ngurah Rai International Airport To Close For 24 Hours For Nyepi",
    image: img4,
  },
  {
    id: 5,
    title: "The Chinese smartphone upstarts taking on Apple and Samsung",
    image: img5,
  },
];

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-9 lg:-left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="w-6 h-20 md:h-28  xl:h-20 md:-mt-1 border border-gray-200 flex items-center justify-center text-gray-500 transition-colors bg-white">
      <ChevronLeft className="w-4 h-4" />
    </div>
  </div>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute -right-9 lg:-right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="w-6 h-20 md:h-28  xl:h-20 md:-mt-1  border border-gray-200 flex items-center justify-center text-gray-500 transition-colors bg-white">
      <ChevronRight className="w-4 h-4" />
    </div>
  </div>
);

export function NewsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: false, // Left to right
    responsive: [
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="mt-14 xl:mt-36 relative w-full shadow py-4 md:pb-2 mb-6 bg-white ">
      <div className="px-12   ">
        <Slider {...settings}>
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="px-0  lg:px-2 ">
              <div className=" flex gap-2 lg:gap-3 items-center cursor-pointer group">
                <div className="md:-mt-14  xl:-mt-0 w-[80px]  h-[70px] md:w-full md:h-full xl:w-[80px]  xl:h-[70px]overflow-hidden  ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className=" mr-1 w-52 md:w-full md:h-full  lg:w-16 lg:h-full xl:w-28 xl:h-16 text-[13px] md:text-[12px] lg:text-[12px] leading-tight font-condensed text-gray-900  font-normal transition-colors">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}