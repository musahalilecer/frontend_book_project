import React from 'react'

interface TextAreaProp {
    value: string;
//    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
}

const TextArea: React.FC<TextAreaProp> = ({ value, placeholder, rows, cols, className, ...props}) => {
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            className={className}
             />

    )
}

export default TextArea