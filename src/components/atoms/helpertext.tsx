import { ReactNode } from "react"

interface IProps {
   maxLength?: string
   textHelper: string
   textClassName?: string
   startAdornment?: ReactNode
}

export default function Helpertext(props: IProps) {
   return (
      <div className={
         "w-full flex flex-wrap p-1 gap-1 "}>
         <div className="w-full flex flex-row gap-1 ">
            {props.startAdornment}
            <span className={
               "text-sm " +
               (props.textClassName ?? "")}>{props.textHelper}</span>
         </div>
         {props.maxLength && (
            <span className="w-full flex text-sm ">
               {props.maxLength}</span>
         )}
      </div>
   )
}