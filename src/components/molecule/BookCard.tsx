import React from 'react'
import Image from "../atomic/Image.tsx";
import TextArea from '../atomic/TextArea.tsx';
import { Book } from '../../model/book.ts'
import Button from '../atomic/Button.tsx';

interface BookCardProp {
  book: Book;
  onBasket: () => void;
  onDetail: () => void;
}

const BookCard: React.FC<BookCardProp> = ({ book, onBasket, onDetail, ...props }) => {
  return (
    <div className='flex flex-col border rounded-2xl shadow-md overflow-hidden w-full h-full hover:shadow-lg transition-shadow duration-300' onClick={onDetail}>
      <div className='w-full aspect-[3/4] bg-white flex items-center justify-center overflow-hidden rounded-t-2xl'>
        <Image
          className='object-contain w-full h-full p-4 rounded-xl'
          image={book.image}
          alt={book.title}
        />
      </div>
      <div className='px-6 py-4 flex flex-col justify-between flex-grow'>
        <h3 className='text-gray-800 font-medium text-lg line-clamp-1'>{book.title}</h3>
        <h4 className='text-gray-700 font-light text-md'>{book.price} TL</h4>
      </div>
      <div className='p-4 pt-0 flex gap-2'>
        <Button
          className='w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-200 cursor-pointer'
          onClick={onBasket}
        >
          Sepete Ekle
        </Button>
      </div>
    </div>


  )
}

export default BookCard