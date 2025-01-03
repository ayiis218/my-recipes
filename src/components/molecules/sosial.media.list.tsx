'use client'

import { SVG_Facebook, SVG_Instagram, SVG_Twitter } from "../svg/svg.social.media"

const toSosmed = () => {

}

export default function SosialMediaList() {
   return (
      <div className="w-full flex flex-row justify-end items-center p-2 gap-8 cursor-pointer ">
         <SVG_Facebook onClick={() => toSosmed()} />
         <SVG_Twitter onClick={() => toSosmed()} />
         <SVG_Instagram onClick={() => toSosmed()} />
      </div>
   )
}