'use client'

import { useRouter } from "next/navigation"
import { SVG_Logo } from "../svg/svg.header"
import { SVG_Facebook, SVG_Instagram, SVG_Twitter } from "../svg/svg.social.media"

export default function Header() {
   const router = useRouter()

   return (
      <header className="w-full flex flex-row items-center p-4 border-1 bg-white shadow-md mb-2 sticky top-0 z-50 ">
         <div className="w-full flex flex-row justify-start items-center p-1 gap-2 ">
            <SVG_Logo onClick={() => router.push("/")} />
         </div>
         <div className="w-full flex flex-row  justify-center items-center p-1 gap-5 ">
            <span className="text-lg font-bold cursor-pointer " onClick={() => router.push("/")}>Home</span>
            <span className="text-lg font-bold cursor-pointer " onClick={() => router.push("/about")}>Recipes</span>
            <span className="text-lg font-bold cursor-pointer " onClick={() => router.push("/contact")}>Blog</span>
            <span className="text-lg font-bold cursor-pointer " onClick={() => router.push("/about")}>Contact</span>
            <span className="text-lg font-bold cursor-pointer " onClick={() => router.push("/contact")}>About Us</span>
         </div>
         <div className="w-full flex flex-row justify-end items-center p-1 gap-8 ">
            <SVG_Facebook />
            <SVG_Twitter />
            <SVG_Instagram />
         </div>
      </header>
   )
}