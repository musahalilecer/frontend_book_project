import React from 'react'
import Image from "../atomic/Image.tsx";
import TextArea from '../atomic/TextArea.tsx';
import { Book } from '../../model/book.ts'
import Button from '../atomic/Button.tsx';
import { useNavigate } from 'react-router-dom';

interface BookCardProp {
  book: Book;
  onBasket: () => void;
  onDetail: () => void;
}

const BookCard: React.FC<BookCardProp> = ({ book, onBasket, onDetail, ...props }) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col border rounded-xl shadow-sm overflow-hidden w-3xs max-w-xs mx-auto hover:shadow-md transition-shadow duration-300' onClick={onDetail}>
      <div className='bg-white flex items-center justify-center overflow-hidden rounded m-2'>
        <Image
          className='object-center w-full h-full rounded overflow-hidden'
          image={book.image}
          alt={book.title}
        />
      </div>
      <div className='px-4 py-3 flex flex-col justify-between flex-grow'>
        <h3 className='text-gray-800 font-semibold text-base line-clamp-1'>{book.title}</h3>
        <h4 className='text-gray-700 text-sm'>{book.price} TL</h4>
      </div>
      <div className='flex justify-between items-baseline px-4 pb-4 pt-0'>
        <Button
          className='w-full bg-green-600 text-white text-sm py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer mr-2'
          onClick={onBasket}
        >
          Sepete Ekle
        </Button>
        <Button
          className='w-full bg-cyan-500 text-white text-sm py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer ml-2'
          onClick={() => navigate(`/detail/${book.id}`)}
        >
          Detay
        </Button>
      </div>
    </div>
  )
}

export default BookCard
