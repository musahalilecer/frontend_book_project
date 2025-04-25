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
    <div className='flex flex-col'>
      <div className='flex flex-row '>
        <div>
          <Image className='' image={book.image}/>
        </div>
      </div>
    </div>
  )
}

export default BookDetail