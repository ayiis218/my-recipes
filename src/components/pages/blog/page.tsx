'use server'

import Typography from "@/components/atoms/typography"

export default async function Blog() {
   return (
      <div className="w-full h-100 flex flex-col items-center ">
         <Typography variant="h1">Hello Guys in Blog page</Typography>
      </div>
   )
}