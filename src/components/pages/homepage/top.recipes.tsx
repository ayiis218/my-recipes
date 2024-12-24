'use client'

import Typography from "@/components/atoms/typography"
import Content from "@/components/molecules/content"
import { SVG_HotRecipes } from "@/components/svg/svg.card"
import Image from "next/image"
import { Fragment } from "react"

export default function Top_Recipes() {
   return (
      <Content classname="flex-row justify-center px-[20px] mt-6 ">
         <Fragment>
            <div className="w-full flex bg-[#E7FAFE] p-10 rounded-l-[25px] ">
               <div className="w-full flex flex-col ">
                  <div className="w-fit flex flex-row items-center rounded-xl bg-[#FFFFFF] px-3 py-2 gap-1 shadow-md ">
                     <SVG_HotRecipes />
                     <Typography variant="subtitle6"> Hot Recipes </Typography>
                  </div>
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
         </Fragment>
      </Content>
   )
}
