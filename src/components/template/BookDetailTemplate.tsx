import React, { useEffect, useState } from 'react'
import BookDetail from '../molecule/BookDetail'
import { Book } from '../../model/book'
import { useParams } from 'react-router-dom';
import BookService from '../../service/BookService';

const BookDetailTemplate = () => {
    const [book, setBook] = useState<Book | null>(null);
    const { id } = useParams<{ id: string }>();
    const bookService = new BookService();

    useEffect(() => {
        const fetchBookById = async () => {
            try {
                if (id) {
                    const data = await bookService.getById(Number(id));
                    setBook(data);
                }

            }
            catch (e) {
                console.log(e);
            }
        };
        fetchBookById();
    }, [id])

    
    return (
        <section>
            <div>
                {book ? (
                    <BookDetail
                        book={book}
                        clickBuy={() => console.log("Buy", book.title)}
                    />
                ) : (
                    <p className="p-4 text-gray-500">Yükleniyor...</p>
                )}
            </div>
        </section>
    )
}

export default BookDetailTemplate