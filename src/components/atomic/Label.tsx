import React from 'react'

interface LabelProp {
    text?: string;
    className?: string;
    htmlFor?: string;
}

const Label: React.FC<LabelProp> = ({ text, className, htmlFor, ...props}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={className}
        >
            {text}
        </label>
    )
}

export default Label