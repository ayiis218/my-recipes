'use server'

import Top_Recipes from "./top.recipes"

export default async function HomePage() {
   return (
      <div className="w-full h-100 flex flex-col items-center ">
         <Top_Recipes />
      </div>
   )
}