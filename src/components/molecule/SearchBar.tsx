import React from 'react'
import TextArea from '../atomic/TextArea'

interface SearchBarProp{
    value: string;
    placeHolder: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({value, placeHolder, ...props}) => {
  return (
    <div className='flex flex-row'>
      <div>
        
      </div>
        <div className='border rounded-2xl p-1.5  '>
        <TextArea
        value={value}
        className='text-gray-950'
        placeholder={placeHolder}
        />
    </div>
    </div>
    
  )
}

export default SearchBar