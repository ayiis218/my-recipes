'use client'

import { ChangeEvent } from "react"
import Textfield from "../atoms/textfield"

interface IProps {
   titile?: string
   handleSubmit?: () => void
   onInputField: (event: ChangeEvent<HTMLInputElement>) => void
   form?: any
}

export default function Form(props: IProps) {
   return (
      <div className="w-full flex flex-col p-2 gap-3 ">
         <span className="text-md align-center ">{props.titile}</span>
         <form className="flex flex-col" onSubmit={props.handleSubmit}>
            <Textfield
               label="Name"
               name=""
               value={props.form?.name}
               onChange={props.onInputField} />
            <Textfield
               label="Email"
               name=""
               value={props.form?.email}
               onChange={props.onInputField} />
            <Textfield
               label="Subject"
               name=""
               value={props.form?.name}
               onChange={props.onInputField} />
            <Textfield
               label="Enquiry type"
               name=""
               value={props.form?.enquiry}
               onChange={props.onInputField} />
            <Textfield
               label="Message"
               name=""
               value={props.form?.message}
               onChange={props.onInputField} />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2 ">Submit</button>
         </form>
      </div>
   )
}