import React from 'react'
import Image from "../atomic/Image.tsx";
import TextArea from '../atomic/TextArea.tsx';
import { Book } from '../../model/Book.ts';
import Button from '../atomic/Button.tsx';

interface BookCardProp {
  book: Book;
  onAddBasket?: () => void;
  goToDetail: () => void
}

const BookCard: React.FC<BookCardProp> = ({ book, onAddBasket, goToDetail, ...props }) => {
  return (
    <div className='flex flex-col border rounded-2xl shadow-md overflow-hidden max-w-sm hover: shadow-lg transition-shadow duration-300'>
      <div className='h-64 w-full overflow-hidden'>
        <Image
         className='object-cover w-full h-full' 
         image={book.image} 
         alt={book.title}
         />

      </div>
      <div className='px-6 py-4 flex flex-col justify-between flex-grow'>
        <h3 className='text-gray-800 font-medium '>{book.title}</h3>
        <h4 className='text-gray-700 font-light '>{book.price}</h4>
      </div>
      <div className='p-4 pt-0 flex gap-2'>
        <Button className='flex-1/2 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-200' onClick={onAddBasket}>Sepete Ekle</Button>
        <Button className='flex-1/2 bg-amber-400 text-white py-2 rounded-xl hover:bg-amber-600 transition-colors duration-200' onClick={goToDetail}>Detay</Button>
      </div>
    </div>

  )
}

export default BookCard