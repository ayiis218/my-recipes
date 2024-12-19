'use client'

import { ReactNode } from "react"

interface IProps {
   disabled?: boolean
   loading?: boolean
   name: string
   classname?: string
   variant?: string
   color?: string
   onClick: () => void
   children: ReactNode
}

export default function Button(props: IProps) {
   const isDisabled = props.disabled || props.loading

   const colorStyle = () => {
      if (isDisabled) return {
         text: 'text-slate-500 ',
         background: 'bg-slate-300 ',
         border: 'border-slate-500 '
      }
      if (props.color === 'orange') return {
         text: 'text-ambilin-orange ',
         background: 'bg-ambilin-orange ',
         border: 'border-ambilin-orange '
      }
      if (props.color === 'red') return {
         text: 'text-ambilin-red ',
         background: 'bg-ambilin-red ',
         border: 'border-ambilin-red '
      }
      return {
         text: 'text-ambilin-blue ',
         background: 'bg-ambilin-blue ',
         border: 'border-ambilin-blue '
      }
   }

   const variant = () => {
      const CHECK_COLOR = colorStyle()
      switch (props.variant) {
         case 'text':
            return `${CHECK_COLOR.text}`
         case 'outlined':
            return `border ${CHECK_COLOR.border} ${CHECK_COLOR.text} bg-white rounded-md `
         default:
            return `${CHECK_COLOR.background} text-white rounded-md  `
      }
   }
   return (
      <button
         disabled={props.disabled}
         name={props.name}
         className={
            "flex flex-row items-center p-2 rounded-md " +
            (props.classname ?? "") +
            variant()
         }
         onClick={props.onClick}
      >
         {props.children}
      </button>
   )
}