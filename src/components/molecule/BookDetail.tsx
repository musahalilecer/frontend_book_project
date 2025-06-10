import React, {  } from 'react'
import Image from '../atomic/Image.tsx';
import { Book } from '../../model/book.ts';

interface BookDetailProp{
  book: Book;
  clickBuy: () => void;
}

const BookDetail: React.FC<BookDetailProp> = ({book}) => {
  return (
    <div className='flex flex-col border rounded-xl shadow-sm overflow-hidden w-4xs max-w-xs mx-auto hover:shadow-md transition-shadow duration-300'>
      <div className='bg-white flex items-center justify-center overflow-hidden rounded m-2'>
        <Image 
        image={book.image}
        alt={book.title} 
        className='object-cover w-full h-full'
        />
      </div>
      <div className='px-6 py-4 flex flex-col justify-between flex-grow'>
        <h2 className='text-gray-800 font-medium'>{book.title}</h2>
        <h3 className='text-gray-700 font-medium'>{book.price}</h3>
        <h4 className='text-gray-700 font-light'>{book.page}</h4>
        
        <h4 className='text-gray-700 font-light'>{book.author?.name}</h4>
        <h4 className='text-gray-700 font-light'>{book.country?.countryName}</h4>
        <h4 className='text-gray-700 font-light'>{book.language?.languageName}</h4>


      </div>
    </div>
  )
}

export default BookDetail