import React, { Children } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'

interface FormRowProp {
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  value: (string | any);
  required?: boolean;
  className?: string;
}

const FormRow: React.FC<FormRowProp> = ({
  label,
  placeholder,
  onChange,
  name,
  type = "text",
  value,
  required,
  className,
  ...props }) => {
  return (
    <div>
      <div>
        <form action="">
          <Label
            className=''
            text={label}
          />
          <Input
            placeHolder={placeholder || ""}
            className=''
            name={name}
            onChange={onChange}
            type={type}
            value={value}
          />
        </form>

      </div>
    </div>
  )
}

export default FormRow