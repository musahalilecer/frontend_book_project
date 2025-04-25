import React, { useEffect } from 'react'
import BookCard from './BookCard'
import { Book } from '../../model/book'


interface BasketProp{
  book: Book;
}
useEffect(() => {

})

const Basket: React.FC<BasketProp> = ({book, ...props}) => {
  return (
    <div>
      <div className="">
        {}
      </div>
    </div>
  )
}

export default Basket