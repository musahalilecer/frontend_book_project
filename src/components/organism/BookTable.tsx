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
    <div>
      <div>
        <TableHead headers={["image", "title", "author", "language", "page", "price"]}/>
        {books.map((book, index) => (
          <TableRow key={index} data={[
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