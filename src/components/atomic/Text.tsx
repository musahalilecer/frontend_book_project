import React from 'react'

interface TextProp {
    text?: String;
    className?: String;
}
const Text: React.FC<TextProp> = ({text, className, ...props}) => {
  return (
    <div>
        <p>{text}</p>
    </div>
  )
}


export default Text