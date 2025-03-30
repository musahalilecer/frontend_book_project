import React from 'react'

interface InputProp{
    placeHolder: string;
    type?: string;
    value?: string;
    name?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProp> = ({placeHolder, type, value, name, className, onChange, ...props}) => {
  return (
    <input
         type={type}
         placeholder={placeHolder} 
         value={value} 
         name={name} 
         className={className} 
         onChange={onChange}
    />
  )
}

export default Input