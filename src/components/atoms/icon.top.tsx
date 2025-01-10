'use client'

import Image from "next/image"

export default function IconTop() {

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   return (
      <div className="fixed bottom-8 right-8 w-full flex flex-row justify-end z-30 ">
         <Image
            src="/icon-top.png"
            alt="top"
            width={40}
            height={40}
            className="cursor-pointer "
            onClick={scrollToTop} />
      </div>
   )
}