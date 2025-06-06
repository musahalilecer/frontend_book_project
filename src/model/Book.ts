import { Author } from "./author";
import { Country } from "./country";
import { Language } from "./language";
import { Publisher } from "./publisher";

export interface Book {
    id?: number | null;
    title: string;
    price: number;
    description: string;
    image: string;
    page: number;

    // author: string;
    // language: string;
    // publisher: string;
    // country: string;

    author: Author;
    language: Language;
    publisher: Publisher;
    country: Country;
}