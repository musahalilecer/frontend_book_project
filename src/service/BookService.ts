import { Book } from "../model/book";
import { BookRequest } from "../model/bookRequest";
import api from "./api"

export default class BookService {

    init = () => {

    }


    getAll = async(): Promise<Book[]> => {
        const response = await api.get<Book[]>('/book');
        return response.data;
    }
    
    getById = async(id: number): Promise<Book> => {
        const response = await api.get<Book>(`/book/${id}`);
        return response.data;
    }

//     post = async(book: Book): Promise<Book> => {
//     const payload: BookRequest = {
//         title: book.title,
//         description: book.description,
//         image: book.image,
//         price: book.price,
//         page: book.page,
//         authorId: book.author.id,
//         languageId: book.language.id,
//         publisherId: book.publisher.id,
//         countryId: book.country.id
//     };

//     const response = await api.post<Book>('/book', payload);
//     return response.data;
// }

post = async (book: BookRequest): Promise<Book | null> => {
  try {
    const response = await api.post<Book>('/book', book);
    return response.data ?? null;
  } catch (error) {
    console.error("BookService POST error:", error);
    throw error;
  }
};

    put = () => {

    }

    delete = async (id: number): Promise<void> => {
        await api.delete(`/book/${id}`);
      };
}