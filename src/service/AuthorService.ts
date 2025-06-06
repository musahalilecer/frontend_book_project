import { Author } from "../model/author";
import api from "./api";

export default class AuthorService{
    getAllAuthors = async(): Promise<Author[]> => {
        const response = await api.get<Author[]>('/author');
        return response.data;
    }

    getAuthorById = async(id: number): Promise<Author[]> => {
        const response = await api.get<Author[]>(`/book/${id}`);
        return response.data;
    }
    createAuthor = async(author: Author): Promise<Author[]> => {
        const response = await api.post<Author[]>('/author', author);
        return response.data;
    }

    // updateAuthor = async(author: Author, id: number): Promise<Author[]> => {
    //     const response = await api.put<Author[]>()
    // }
    
    deleteAuthor = async(id: number): Promise<void> => {
        await api.delete(`/book/${id}`);
    }
}