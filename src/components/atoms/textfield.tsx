import { ChangeEvent, ReactNode } from "react"
import Helpertext from "./helpertext"

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
   onChange: (event: ChangeEvent<HTMLInputElement>) => void
   startAdornment?: ReactNode
   endAdornment?: ReactNode
   helpertext?: string
   maxLength?: string
   iconHelper?: ReactNode
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
               "flex flex-row items-center rounded-md " +
               (props.disabled
                  ? "bg-gray-200 border-[#B5B6B6] text-slate-400 "
                  : "bg-white text-slate-600 h-[40px] ") +
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
                  onChange={props.onChange}
               />
               {props.endAdornment}
            </div>
            {props.helpertext && (
               <Helpertext
                  maxLength={props.maxLength}
                  textHelper={props.helpertext}
                  startAdornment={props.iconHelper} />
            )}
         </div>
      </div>
   )
}