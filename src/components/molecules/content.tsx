import { ReactNode } from "react"

interface IProps {
   children: ReactNode
   classname?: string
}

export default function Content({ children, classname }: IProps) {
   return (
      <div className={"w-full flex p-2 " + (classname ?? "")}>
         {children}
      </div>
   )
}