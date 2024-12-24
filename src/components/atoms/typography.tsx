import { ReactNode } from "react"

export interface I_TypographyProp {
   variant?:
   | 'h1'
   | 'h2'
   | 'h3'
   | 'h4'
   | 'h5'
   | 'h6'
   | 'subtitle'
   | 'subtitle2'
   | 'subtitle3'
   | 'subtitle4'
   | 'subtitle5'
   | 'subtitle6'
   | 'label'
   | 'body'
   | 'body2'
   darkMode?: boolean
   className?: string
   children?: ReactNode
   inherit?: boolean
}

export default function Typography(prop: I_TypographyProp) {
   const bodyClassName = prop.inherit
      ? ''
      : prop.darkMode
         ? 'text-white opacity-80 '
         : 'text-slate-600 '
   const variantStyle = () => {
      if (prop.variant === 'h1') return 'text-3xl font-bold md:text-4xl '
      if (prop.variant === 'h2') return 'text-2xl font-bold md:text-3xl '
      if (prop.variant === 'h3') return 'text-xl font-bold md:text-2xl '
      if (prop.variant === 'h4') return 'text-lg font-bold md:text-xl '
      if (prop.variant === 'h5') return 'text-base font-bold md:text-lg '
      if (prop.variant === 'h6') return 'text-base font-bold '
      if (prop.variant === 'subtitle') return 'text-lg font-semibold '
      if (prop.variant === 'subtitle2')
         return 'text-lg font-semibold ' + bodyClassName
      if (prop.variant === 'subtitle3') return 'text-base font-semibold '
      if (prop.variant === 'subtitle4') return 'text-sm font-semibold '
      if (prop.variant === 'subtitle5') return 'text-sm font-normal '
      if (prop.variant === 'subtitle6') return 'text-xs font-normal '
      if (prop.variant === 'label') return 'text-xs font-semibold '
      if (prop.variant === 'body2') return 'text-sm leading-relaxed ' + bodyClassName
      return 'text-base leading-relaxed ' + bodyClassName
   }

   return (
      <span className={variantStyle() + (prop.className ?? '')}>
         {prop.children}
      </span>
   )
}
