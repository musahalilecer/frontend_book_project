import React from 'react'
import { Book } from '../../model/book'
import FormRow from '../molecule/FormRow';

interface BookFormProps{
  book: Book;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BookForm: React.FC<BookFormProps> = ({book, handleChange }) => {
  return (
    <div>
      <div>
      <FormRow
        label="Book Image"
        name="image"
        value={book.image}
        onChange={handleChange}
        placeholder="Enter the image"
      />

<FormRow
        label="Book Title"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Enter the title"
      />

<FormRow
        label="Book Title"
        name="page"
        value={book.page}
        onChange={handleChange}
        placeholder="Enter the title"
      />

<FormRow
        label="Book Title"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Enter the title"
      />
      </div>
    </div>
  )
}

export default BookForm