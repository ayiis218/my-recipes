import { ChangeEvent, ReactNode } from "react"
import Helpertext from "./helpertext"
import Typography from "./typography"

interface IProps {
   classnameLabel?: string
   classnameField?: string
   mandatory?: boolean
   disabled?: boolean
   validation?: string
   name: string
   placeholder?: string
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
      <div className="w-full flex flex-col py-1 ">
         {props.label && (
            <Typography variant="subtitle4" className={
               (props.classnameLabel ?? "") + "m-1 " +
               (props.mandatory && "after:content-['*'] after:mx-1 after:text-[#EC1E1E] ")
            }>
               {props.label}
            </Typography>
         )}
         <div className="w-full flex flex-col">
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
                  placeholder={props.placeholder}
                  type={props.type ?? "text"}
                  className={
                     "w-full p-2 border rounded-md" +
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