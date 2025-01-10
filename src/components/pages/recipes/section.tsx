'use client'

import Content from "@/components/molecules/content"
import Form from "@/components/molecules/form"
import Textfield from "@/components/atoms/textfield"
import { ChangeEvent, Fragment, useEffect, useState, useTransition } from "react"
import { E_Form, E_Recipes } from "./constant"
import { capitalizeWords } from "@/utils/text.transform"
import { emitter } from "@/components/client.emitter"

export interface IForm {
   name?: string
   email?: string
   subject?: string
   enquiry?: string
   message?: string
}

export interface FormType {
   name: string
   value: string
}

interface FormValues {
   [key: string]: string
}

export default function CardForm() {
   const formInit = E_Form

   const [pending, isTransition] = useTransition()
   const [form, setForm] = useState<FormType[]>([])
   const [errors, setErrors] = useState<FormValues>({})
   const [formValue, setFormValue] = useState<IForm>({
      name: '',
      email: '',
      subject: '',
      enquiry: '',
      message: '',
   })

   useEffect(() => {
      if (!formInit) return
      const form = Object.keys(formInit).map((item) => {
         return {
            name: item,
            value: ''
         }
      })
      setForm(form)
   }, [])

   const onInputField = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormValue({
         ...formValue,
         [name]: value
      })
      if (errors[name]) {
         setErrors({
            ...errors,
            [name]: ''
         })
      }
   }

   const validateForm = (): boolean => {
      const newErrors: FormValues = {}
      let isValid = true

      form?.forEach((item) => {
         if (!formValue[item.name as keyof typeof formValue]?.trim()) {
            newErrors[item.name] = `${capitalizeWords(item.name)} is required`
            isValid = false
         }
      })

      setErrors(newErrors)
      return isValid
   }

   const onSubmit = () => {
      emitter.emit(E_Recipes.SUBMIT, formValue)
   }

   return (
      <Content>
         <Form
            onInputField={onInputField}
            handleSubmit={onSubmit}
            buttonName="Submit"
            loading={pending}>
            {form?.map((item, index) => {
               const value = formValue[item.name as keyof typeof formValue] || ''
               return (
                  <Fragment key={index}>
                     <Textfield
                        label={capitalizeWords(item.name)}
                        name={item.name}
                        placeholder={`Silahkan masukkan ${item.name}`}
                        value={value}
                        onChange={onInputField} />
                  </Fragment>
               )
            })}
         </Form>
      </Content>
   )
}