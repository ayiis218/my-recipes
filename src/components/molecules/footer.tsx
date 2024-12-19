'use client'

import { SVG_Logo } from "../svg/svg.header"
import { SVG_Facebook, SVG_Instagram, SVG_Twitter } from "../svg/svg.social.media"

interface IPropFooter {
   onClick?: () => void
}

export default function Footer(props: IPropFooter) {

   const toSosmed = () => {

   }

   return (
      <footer className="w-full flex flex-col p-4 gap-3 bg-white mp-2 ">
         <div className="w-full flex flex-row items-center ">
            <div className="w-full flex justify-start flex-col p-1 gap-1 ">
               <SVG_Logo />
               <span>loren ipsun</span>
            </div>
            <div className="w-full flex flex-row justify-end items-center p-2 gap-8 cursor-pointer ">
               <SVG_Facebook onClick={() => toSosmed()} />
               <SVG_Twitter onClick={() => toSosmed()} />
               <SVG_Instagram onClick={() => toSosmed()} />
            </div>
         </div>
         <div className="w-full flex justify-center align-center ">
            <span className="text-sm ">@loren{' '}<a href="" className="text-sm font-bold cursor-pointer ">link</a></span>
         </div>
      </footer >
   )
}