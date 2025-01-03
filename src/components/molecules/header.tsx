'use client'

import { usePathname, useRouter } from "next/navigation"
import { SVG_Logo } from "../svg/svg.header"
import SosialMediaList from "./sosial.media.list"

const header = [
   { name: "Home", path: "/homepage" },
   { name: "Recipes", path: "/recipes" },
   { name: "Blog", path: "/blog" },
   { name: "Contact", path: "/contact" },
   { name: "About Us", path: "/about" },
]

export default function Header() {
   const router = useRouter()
   const pathname = usePathname()

   return (
      <header className="w-full flex flex-row items-center p-4 border-1 bg-white shadow-md mb-2 sticky top-0 z-50 ">
         <div className="w-full flex flex-row justify-start items-center p-1 gap-2 ">
            <SVG_Logo onClick={() => router.push("/")} />
         </div>
         <div className="w-full flex flex-row  justify-center items-center p-1 gap-5 ">
            {header.map((item, index) => {
               const active = pathname === item.path ? "text-blue-500" : "text-black"
               return (
                  <span
                     key={index}
                     className={"text-lg font-bold cursor-pointer " + (active)}
                     onClick={() => router.push(item.path)}>
                     {item.name}
                  </span>
               )
            })}
         </div>
         <SosialMediaList />
      </header>
   )
}