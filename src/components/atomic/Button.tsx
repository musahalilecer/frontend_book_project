import React from 'react'

interface ButtonProp{
    children?: React.ReactNode;
    onClick?: () => void;
//    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProp> = ({children, type, onClick, className, ...props}) => {
  return (
    <button onClick={onClick} type={type} className={'px-4 py-2 rounded-lg' + className} {...props}>
        {children}
    </button>
  )
}

export default Button