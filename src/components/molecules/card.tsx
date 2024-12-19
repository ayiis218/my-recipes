'use client'

interface IProps {
   children: string
   classname?: string
}

export default function Card(props: IProps) {
   return (
      <div className={"w-full flex rounded-md p-3 " + (props.classname ?? "")}>
         {props.children}
      </div>
   )
}