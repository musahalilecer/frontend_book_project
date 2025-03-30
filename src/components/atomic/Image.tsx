import React from 'react'
interface ImageProps{
    image?: string;
    className: string;
    alt?: string;
}

const Image: React.FC<ImageProps> = ({image, className, alt, ...props}) => {
  return (
    <div>
        <img src={image} alt={alt} className={className}/>
    </div>
  )
}

export default Image