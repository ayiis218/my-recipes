'use client'

import { ReactNode } from "react"

interface IProps {
   children: ReactNode
   classname?: string
}

export default function Card(props: IProps) {
   return (
      <div className={"w-full flex rounded-md p-3 " + (props.classname ?? "")}>
         {props.children}
      </div>
   )
}