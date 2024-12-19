'use client'

import Content from "@/components/molecules/content"

export default function SliderHead() {
   return (
      <Content classname="flex-row rounded-xl bg-[#E7FAFE] ">
         <div className="w-full flex flex-col p-3 m-2 shadow-md ">
            <div className="flex flex-row items-center p-1 ">
               {/* icon */}
               <span className="text-lg ">
                  Hot Recipes
               </span>
            </div>
         </div>
         <div className="w-full flex ">
            {/* Image */}
         </div>
      </Content>
   )
}
