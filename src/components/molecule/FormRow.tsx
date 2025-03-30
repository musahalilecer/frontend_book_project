import React, { Children } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'

interface FormRowProp {
  text: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string
}

const FormRow: React.FC<FormRowProp> = ({ type, value, text, placeholder, name, onChange, ...props }) => {
  return (
    <div>
      <div>
        <Label
         className='' 
         text={text}
         />

        <Input 
        placeHolder={placeholder}
        className=''
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        />
      </div>
    </div>
  )
}

export default FormRow