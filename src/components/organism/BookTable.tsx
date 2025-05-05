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
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-6'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
          <TableHead headers={["Image", "Title", "Page", "Price"]} className={''} />
        </thead>
        <tbody>
          {books.map((book, index) => (
            <TableRow
              key={index}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              data={[
                <img src={book.image} alt={book.title} className='h-16 w-12 object-cover rounded-md' />, // Image with styling
                book.title,
                book.page.toString(),
                book.price.toString() + ' TL'
              ]}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable