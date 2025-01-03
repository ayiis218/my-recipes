'use client'

import { SVG_Logo } from "../svg/svg.header"
import SosialMediaList from "./sosial.media.list"

interface IPropFooter {
   onClick?: () => void
}

export default function Footer(props: IPropFooter) {

   return (
      <footer className="w-full flex flex-col p-4 gap-3 bg-white mp-2 ">
         <div className="w-full flex flex-row items-center ">
            <div className="w-full flex justify-start flex-col p-1 gap-1 ">
               <SVG_Logo />
               <span>loren ipsun</span>
            </div>
            <SosialMediaList />
         </div>
         <div className="w-full flex justify-center align-center ">
            <span className="text-sm ">@loren{' '}<a href="" className="text-sm font-bold cursor-pointer ">link</a></span>
         </div>
      </footer >
   )
}