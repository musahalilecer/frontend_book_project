import React from 'react'
import BookCard from '../molecule/BookCard'
import { Book } from '../../model/book'

interface BookCardGroupProp{
  book: Book;
  goToDetail: () => void;
  goToBasket: () => void;
  books: Book[];
}

const BookCardGroup: React.FC<BookCardGroupProp> = ({book, books, goToBasket, goToDetail, ...props}) => {
  return (
    <div className=''>
      <div className='grid-cols-3'>
        {books.map((book, item) => (
          <BookCard key={item} book={book} onBasket={goToBasket} onDetail={goToDetail}/>
        ))}
      </div>
    </div>
  )
}

export default BookCardGroup