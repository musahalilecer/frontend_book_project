import React from 'react'

interface ButtonProp{
    children?: React.ReactNode;
    onClick?: () => void;
//    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProp> = ({children, onClick, className, ...props}) => {
  return (
    <button onClick={onClick} className={className} {...props}>
        {children}
    </button>
  )
}

export default Button