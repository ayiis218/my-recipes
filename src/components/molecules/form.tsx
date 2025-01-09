'use client'

import Button from "../atoms/button"
import { ChangeEvent, ReactNode } from "react"

interface IProps {
   titile?: string
   handleSubmit: () => void
   onInputField: (event: ChangeEvent<HTMLInputElement>) => void
   children: ReactNode
   buttonName?: string
   loading?: boolean
}

export default function Form(props: IProps) {
   return (
      <div className="w-full flex flex-col p-2 gap-3 ">
         <span className="text-md align-center ">{props.titile}</span>
         {props.children}
         <Button
            name="btn-create"
            className="bg-blue-500 text-white rounded-md p-2 "
            onClick={props.handleSubmit}>
            {props.loading ? "Loading..." : props.buttonName}
         </Button>
      </div >
   )
}