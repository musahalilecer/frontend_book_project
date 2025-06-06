import React, { useEffect, useState } from 'react'
import Label from '../atomic/Label'
import Input from '../atomic/Input'
import Button from '../atomic/Button'
import { Book } from '../../model/book';
import BookService from "../../service/BookService";
import { useNavigate } from 'react-router-dom';
import DropDown from '../molecule/DropDown';
import AuthorService from '../../service/AuthorService';
import { Author } from '../../model/author';
import { Language } from '../../model/language';
import LangaugeService from '../../service/LanguageService';
import PublisherService from '../../service/PublisherService';
import CountryService from '../../service/CountryService';
import { Publisher } from '../../model/publisher';
import { Country } from '../../model/country';


const BookAddTemplate: React.FC = () => {
    const [book, setBook] = useState<Book>({
        title: '',
        price: 0,
        description: '',
        image: '',
        page: 0,
        author: { id: 0, name: '', image: '' },
        language: { id: 0, languageName: '' },
        publisher: { id: 0, publisherName: '' },
        country: { id: 0, countryName: '' },
    });

    const [authors, setAuthors] = useState<Author[]>([]);
    const [languages, setLanguages] = useState<Language[]>([]);
    const [publishers, setPublishers] = useState<Publisher[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);

    const bookService = new BookService();
    const navigate = useNavigate();
    const authorService = new AuthorService();
    const languageService = new LangaugeService();
    const publisherService = new PublisherService();
    const countryService = new CountryService();

    useEffect(() => { languageService.getAllLanguage().then(setLanguages).catch(console.error); }, []);
    useEffect(() => { authorService.getAllAuthors().then(setAuthors).catch(console.error); }, []);
    useEffect(() => { publisherService.getAllPublisher().then(setPublishers).catch(console.error); }, []);
    useEffect(() => { countryService.getAllCountries().then(setCountries).catch(console.error); }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!book.author.id || !book.language.id || !book.publisher.id || !book.country.id) {
            alert("Lütfen tüm seçimleri yapınız.");
            return;
        }

        const payload = {
            title: book.title,
            description: book.description,
            image: book.image,
            price: book.price,
            page: book.page,
            authorId: book.author.id,
            languageId: book.language.id,
            publisherId: book.publisher.id,
            countryId: book.country.id
        };

        try {
            await bookService.post(payload as any);
            setBook({
                title: '', price: 0, description: '', image: '', page: 0,
                author: { id: 0, name: '', image: '' },
                language: { id: 0, languageName: '' },
                publisher: { id: 0, publisherName: '' },
                country: { id: 0, countryName: '' }
            });
            navigate('/admin/book_form');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleAuthorChange = (val: string) => {
        const selected = authors.find(a => a.id.toString() === val);
        if (selected) setBook(prev => ({ ...prev, author: selected }));
    };
    const handleLanguageChange = (val: string) => {
        const selected = languages.find(l => l.id.toString() === val);
        if (selected) setBook(prev => ({ ...prev, language: selected }));
    };
    const handleCountryChange = (val: string) => {
        const selected = countries.find(c => c.id.toString() === val);
        if (selected) setBook(prev => ({ ...prev, country: selected }));
    };
    const handlePublisherChange = (val: string) => {
        const selected = publishers.find(p => p.id.toString() === val);
        if (selected) setBook(prev => ({ ...prev, publisher: selected }));
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="text-center mb-6">
                <h1 className="font-bold text-gray-900 text-3xl">Book Add Page</h1>
            </div>
            <div className="bg-white rounded-2xl border p-6 shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Label text="Title" />
                    <Input placeHolder="Enter the Title" value={book.title} onChange={e => setBook({ ...book, title: e.target.value })} />

                    <Label text="Author Name" />
                    <DropDown label="Author" options={[{ label: "Seçiniz", value: "" }, ...authors.map(a => ({ label: a.name, value: a.id.toString() }))]} value={book.author.id ? book.author.id.toString() : ""} onChange={handleAuthorChange} />

                    <Label text="Price" />
                    <Input placeHolder="Enter the Price" type="number" value={book.price} onChange={e => setBook({ ...book, price: Number(e.target.value) })} />

                    <Label text="Page" />
                    <Input placeHolder="Enter the Page Count" type="number" value={book.page} onChange={e => setBook({ ...book, page: Number(e.target.value) })} />

                    <Label text="Image URL" />
                    <Input placeHolder="Enter the Image URL" type="url" value={book.image} onChange={e => setBook({ ...book, image: e.target.value })} />

                    <Label text="Language" />
                    <DropDown label="Language" options={[{ label: "Seçiniz", value: "" }, ...languages.map(l => ({ label: l.languageName, value: l.id.toString() }))]} value={book.language.id ? book.language.id.toString() : ""} onChange={handleLanguageChange} />

                    <Label text="Publisher" />
                    <DropDown label="Publisher" options={[{ label: "Seçiniz", value: "" }, ...publishers.map(p => ({ label: p.publisherName, value: p.id.toString() }))]} value={book.publisher.id ? book.publisher.id.toString() : ""} onChange={handlePublisherChange} />

                    <Label text="Country" />
                    <DropDown label="Country" options={[{ label: "Seçiniz", value: "" }, ...countries.map(c => ({ label: c.countryName, value: c.id.toString() }))]} value={book.country.id ? book.country.id.toString() : ""} onChange={handleCountryChange} />

                    <Label text="Description" />
                    <textarea placeholder="Enter the Description" className="w-full border rounded-md px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} value={book.description} onChange={e => setBook({ ...book, description: e.target.value })}></textarea>

                    <Button className="w-full bg-blue-500 text-white text-sm py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-800 hover:shadow-lg cursor-pointer" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default BookAddTemplate;