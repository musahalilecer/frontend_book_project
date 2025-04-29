import React, { FC } from 'react'
import Image from '../atomic/Image.tsx';
import { Book } from '../../model/book.ts';
import Button from '../atomic/Button.tsx';

interface BookDetailProp{
  book: Book;
  clickBuy: () => void;
}

const BookDetail: React.FC<BookDetailProp> = ({book, clickBuy, ...props}) => {
  return (
    <div className='flex flex-col border rounded-2xl shadow-md overflow-hidden hover: shadow-lg transition-shadow duration-300'>
      <div className='h-64 w-full overflow-hidden'>
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
      </div>
    </div>
  )
}

export default BookDetail