import React, { FC } from 'react'
import Image from '../atomic/Image.tsx';
import { Book } from '../../model/Book.ts';

interface BookDetailProp{
  book: Book
}

const BookDetail: React.FC<BookDetailProp> = ({book, ...props}) => {
  return (
    <div className='p-2 m-4 max-w-16 overflow-hidden shadow-lg rounded-2xl bg-amber-50'>
      <div className='flex flex-col '>
        <Image className='w-full' image={book.image} alt={book.title}/>
      </div>
      <div className='flex flex-col '>
        <p>{book.title}</p>
        <p>Book Price</p>
        <p>Book Author</p>
        <p>Book Publisher</p>
      </div>
    </div>
  )
}

export default BookDetail