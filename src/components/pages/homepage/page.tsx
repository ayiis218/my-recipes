'use server'

import Favorite_Recipes from "./favorite.recipe"
import Recipes from "./recipes"
import Top_Recipes from "./top.recipes"

export default async function HomePage() {
   return (
      <div className="w-full h-100 flex flex-col items-center ">
         <div className="w-full p-3 ">
            <Top_Recipes />
         </div>
         <div className="w-full p-5 ">
            <Favorite_Recipes />
         </div>
         <Recipes />
      </div>
   )
}