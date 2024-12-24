import { ChangeEvent } from "react"
import Typography from "./typography"

interface I_IpropsRadio {
   name?: string
   value?: string | number | readonly string[]
   checked?: boolean
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Radio({
   name,
   value,
   checked,
   onChange,
}: I_IpropsRadio) {
   return (
      <label className="flex items-center space-x-2 cursor-pointer ">
         <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="form-radio h-4 w-4 cursor-pointer "
         />
         <Typography variant="subtitle5" >{value}</Typography>
      </label>
   )
}