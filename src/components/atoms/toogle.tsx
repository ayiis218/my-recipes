interface I_Props {
   isActive: boolean
   onToggle: (value: boolean) => void
}

export default function Toogle({
   isActive,
   onToggle
}: I_Props) {

   return (
      <div onClick={() => onToggle(!isActive)}
         className={
            'flex items-center cursor-pointer ' +
            (isActive
               ? 'text-blue-600 '
               : 'text-gray-400 ')
         }>
         <div className={
            'relative inline-block w-12 mr-2 rounded-full ' +
            'align-middle select-none transition duration-200 ease-in ' +
            (isActive
               ? 'bg-blue-600 '
               : 'bg-gray-300 ')
         }>
            <span className={
               'transition-transform duration-200 ease-in-out ' +
               'block w-6 h-6 transform bg-white rounded-full shadow-md  ' +
               (isActive
                  ? 'translate-x-6 '
                  : ''
               )} ></span>
         </div>
      </div >
   )
}