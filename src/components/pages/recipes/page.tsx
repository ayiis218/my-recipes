'use server'

import Typography from "@/components/atoms/typography"
import CardForm from "./section"

export default async function Recipes() {
   return (
      <div className="w-full h-100 flex flex-col items-center ">
         <Typography variant="h1">Hello Guys in Recipes page</Typography>
         <div className="w-full m-6 ">
            <CardForm />
         </div>

      </div>
   )
}