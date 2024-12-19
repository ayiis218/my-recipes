'use client'

import { ChangeEvent, ReactNode } from "react"

interface IProps {
   classnameLabel?: string
   classnameField?: string
   mandatory?: boolean
   disabled?: boolean
   validation?: string
   name: string
   type?: string
   label?: string
   value?: string | number | readonly string[] | undefined
   onchange: (event: ChangeEvent<HTMLInputElement>) => void
   startAdornment?: ReactNode
   endAdornment?: ReactNode
   helpertext?: string
}

export default function Textfield(props: IProps) {
   return (
      <div className="w-full flex flex-col py-2 ">
         {props.label && (
            <span className={
               (props.classnameLabel ?? "") +
               (props.mandatory && "after:content-['*'] after:mx-1 after:text-[#EC1E1E] ")
            }>
               {props.label}
            </span>
         )}
         <div className="w-full flex flex-col py-1 ">
            <div className={
               "flex flex-row items-center border rounded-md " +
               (props.disabled
                  ? "bg-gray-200 border border-[#B5B6B6] text-slate-400 "
                  : "bg-white text-slate-600 ") +
               (props.validation
                  ? "border-red-600 "
                  : ""
               )}>
               {props.startAdornment}
               <input
                  disabled={props.disabled}
                  name={props.name}
                  type={props.type ?? "text"}
                  className={
                     "border-none bg-transparent " +
                     (props.classnameField ?? "")}
                  value={props.value}
                  onChange={props.onchange}
               />
               {props.endAdornment}
            </div>
            {props.helpertext && (
               <span>helpertext</span>
            )}
         </div>
      </div>
   )
}