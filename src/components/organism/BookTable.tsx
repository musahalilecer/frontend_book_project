import React from 'react'
import { Book } from '../../model/book';
import TableHead from '../molecule/TableHead';
import TableRow from '../molecule/TableRow';

interface BookTableProps{
  book: Book;
  books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({book, books, ...props}) => {
  return (
    <div className='relative overflow-x-auto'>
      <div className='w-full text-sm text-left rtl: text-right text-gray-500 dark:text-gray-400'>
        <TableHead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' headers={["image", "title", "author", "language", "page", "price"]}/>
        {books.map((book, index) => (
          <TableRow className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200' key={index} data={[
            book.image,
            book.title,
            book.page,
            book.price
          ]}/>
        ))}
      </div>
    </div>
  )
}

export default BookTable