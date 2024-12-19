'use client'

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { ReactNode } from "react"

interface IProps {
   children: ReactNode
}

export default function ProgressBarProvider({ children }: IProps) {
   return (
      <>
         {children}
         <ProgressBar
            height="4px"
            color="#fffd00"
            options={{ showSpinner: false }}
            shallowRouting
         />
      </>
   )
}