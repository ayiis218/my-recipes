'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Favorite_Recipes() {
   const [selectedTab, setSelectedTab] = useState(allIngredients[0]);

   return (
      <div className={
         "w-full h-[500px] flex flex-col gap-4 " +
         "bg-white rounded-xl border-1 border-[#eeeeee] " +
         "shadow-[0_0_1px_hsl(0deg_0%_0%_/_0.075),0_0_2px_hsl(0deg_0%_0%_/_0.075),0_0_4px_hsl(0deg_0%_0%_/_0.075),0_0_8px_hsl(0deg_0%_0%_/_0.075),0_0_16px_hsl(0deg_0%_0%_/_0.075)] "
      }>
         <nav className="bg-[#fdfdfd] p-5 rounded-t-xl border-b-1 border-[#eeeeee] ">
            <ul className="w-full flex list-none ">
               {allIngredients.map((item) => (
                  <li
                     key={item.label}
                     className={
                        "flex flex-1 w-full relative bg-white justify-between items-center list-none " +
                        "py-2 px-4 rounded-md cursor-pointer " +
                        (item === selectedTab
                           ? "bg-[#eee] "
                           : "")}
                     onClick={() => setSelectedTab(item)}
                  >
                     {`${item.icon} ${item.label}`}
                     {item === selectedTab ? (
                        <motion.div
                           className={
                              "absolute bottom-0 left-0 w-full h-1 bg-[#8855ff] "
                           }
                           layoutId={
                              "absolute bottom-0 left-0 w-full h-1 bg-[#8855ff] "
                           } />
                     ) : null}
                  </li>
               ))}
            </ul>
         </nav>
         <main className={
            "flex flex-1 justify-center items-center text-[120px] "
         }>
            <AnimatePresence mode="wait">
               <motion.div
                  key={selectedTab ? selectedTab.label : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
               >
                  {selectedTab ? selectedTab.icon : "😋"}
               </motion.div>
            </AnimatePresence>
         </main>
      </div >
   );
}

export interface Ingredient {
   icon: string;
   label: string;
}

export const allIngredients = [
   { icon: "🍅", label: "Tomato" },
   { icon: "🥬", label: "Lettuce" },
   { icon: "🧀", label: "Cheese" },
   { icon: "🥕", label: "Carrot" },
   { icon: "🍌", label: "Banana" },
   { icon: "🫐", label: "Blueberries" },
   { icon: "🥂", label: "Champers?" }
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
   ingredients: Ingredient[]
): Ingredient | undefined {
   const existing = new Set(ingredients);
   return allIngredients.find((ingredient) => !existing.has(ingredient));
}

