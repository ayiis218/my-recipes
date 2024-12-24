import Typography from "./typography"

interface IProps {
   title: string
   value: string
   checkedItems: string[]
   onChecked: (value: string) => void
}

export default function CheckBox({
   title,
   value,
   checkedItems,
   onChecked
}: IProps) {

   return (
      <label
         htmlFor={title}
         className="flex items-center space-x-2 cursor-pointer ">
         <input
            id={title}
            checked={checkedItems.includes(value)}
            name={title}
            type="checkbox"
            onChange={(e) => onChecked(value)}
            className="w-4 h-4 text-blue-500 rounded-md cursor-pointer "
         />
         <Typography variant="subtitle5" className="truncate ">
            {title}
         </Typography>
      </label>
   )
}