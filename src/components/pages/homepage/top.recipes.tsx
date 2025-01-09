'use client'

import Image from "next/image"
import Typography from "@/components/atoms/typography"
import Content from "@/components/molecules/content"
import { SVG_HotRecipes } from "@/components/svg/svg.card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Top_Recipes() {
   return (
      <Swiper
         modules={[Pagination, Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         pagination={{ clickable: true }}
         navigation
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         className="w-full rounded-[25px] "
      >
         {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
               <Content classname="flex-row justify-center px-[20px] mt-6 ">
                  <div className="w-full flex bg-[#E7FAFE] p-10 rounded-l-[25px] ">
                     <div className="w-full flex flex-col ">
                        <div className="w-fit flex flex-row items-center rounded-xl bg-[#FFFFFF] px-3 py-2 gap-1 shadow-md ">
                           <SVG_HotRecipes />
                           <Typography variant="subtitle6"> Hot Recipes </Typography>
                        </div>
                        <Typography className="text-[80px] text-[#000000] font-bold mt-7 ">Spicy delicious chicken wings</Typography>
                        <Typography variant="subtitle5" className="mt-4 text-[#0B0A0A] ">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </Typography>
                     </div>
                  </div>
                  <div className="w-full flex ">
                     <Image
                        src="/recipes1.png"
                        alt="recipes1"
                        width={1200}
                        height={200}
                        className="m-0 object-cover rounded-r-[25px] " />
                  </div>
               </Content>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}
