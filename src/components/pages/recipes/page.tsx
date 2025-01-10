'use server'

import Typography from "@/components/atoms/typography"
import CardForm from "./section"
import TestResult from "./test.result"

export default async function Recipes() {
   return (
      <div className="w-full h-100 flex flex-col items-center ">
         <Typography variant="h1">Hello Guys in Recipes page</Typography>
         <div className="w-full mx-6 ">
            <CardForm />
         </div>
         <div className="w-full ">
            <TestResult />
         </div>
      </div>
   )
}