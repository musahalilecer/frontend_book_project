import React from 'react'
import BookCard from '../molecule/BookCard'
import { Book } from '../../model/book'

interface BookCardGroupProp{
  book: Book;
  goToDetail: () => void;
  goToBasket: () => void;
}

const BookCardGroup: React.FC<BookCardGroupProp> = ({book, goToBasket, goToDetail, ...props}) => {
  return (
    <div>
      <div className='grid-cols-3'>
        <BookCard book={book} onBasket={goToBasket} onDetail={goToDetail}/>
      </div>
    </div>
  )
}

export default BookCardGroup