'use client'

import { emitter } from "@/components/client.emitter"
import Card from "@/components/molecules/card"
import Content from "@/components/molecules/content"
import { useEffect, useState } from "react"
import { E_Recipes } from "./constant"
import Typography from "@/components/atoms/typography"
import { IForm } from "./section"

let firstLoad = true

export default function TestResult() {
   const [data, setData] = useState<IForm>()

   useEffect(() => {
      if (firstLoad) {
         emitter.on(E_Recipes.SUBMIT, (value: IForm) => {
            setData(value)
         })
         firstLoad = false
      }
      return () => {
         emitter.removeAllListeners(E_Recipes.SUBMIT)
         firstLoad = true
      }
   })

   return (
      <Content>
         <Card classname="box-shadow ">
            <div className="w-full flex flex-col ">
               <Typography variant="subtitle5">Name : {data?.name}</Typography>
               <Typography variant="subtitle5">Email : {data?.email}</Typography>
               <Typography variant="subtitle5">Enquiry : {data?.enquiry}</Typography>
               <Typography variant="subtitle5">Message : {data?.message}</Typography>
               <Typography variant="subtitle5">Subject : {data?.subject}</Typography>
            </div>
         </Card>
      </Content>
   )
}