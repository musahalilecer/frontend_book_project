import React from 'react'
import { Book } from '../../model/book'
import FormRow from '../molecule/FormRow';
import Label from '../atomic/Label';
import Input from '../atomic/Input';

interface BookFormProps{
  book: Book;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BookForm: React.FC<BookFormProps> = ({book, handleChange }) => {
  return (
    <div className=''>
      <form action="">
        <div>
          <Label className='block text-gray-700 text-sm font-medium mb-2'/>
          <Input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeHolder='Enter the Book Image' value={book.image}/> 

          <Label className='block text-gray-700 text-sm font-medium mb-2'/>
          <Input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeHolder='Enter the Book Title' value={book.title}/> 

          <Label className='block text-gray-700 text-sm font-medium mb-2'/>
          <Input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeHolder='Enter the Book Image' value={book.page.toString()}/> 

          <Label className='block text-gray-700 text-sm font-medium mb-2'/>
          <Input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeHolder='Enter the Book Image' value={book.price.toString()}/> 
        
        
        
        </div>
      </form>
    </div>
  )
}

export default BookForm