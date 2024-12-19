'use client'

import Content from "@/components/molecules/content"
import Form from "@/components/molecules/form"
import { ChangeEvent } from "react"

export default function CardForm() {

   const onInputField = (event: ChangeEvent<HTMLInputElement>) => {

   }

   const onSubmit = () => {
      console.log('submit')
   }
   return (
      <Content>
         <Form onInputField={onInputField} handleSubmit={onSubmit} />
      </Content>
   )
}