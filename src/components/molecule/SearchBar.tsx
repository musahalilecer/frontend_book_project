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
        <div>
        <TextArea
        value={value}
        className=''
        placeholder={placeHolder}
        />
    </div>
    </div>
    
  )
}

export default SearchBar