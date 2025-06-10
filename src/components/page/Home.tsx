import  { useEffect, useState } from 'react'
import BookCard from '../molecule/BookCard';
import { Book } from '../../model/book';
import BookService from '../../service/BookService';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  
  /*
  const books: Book[] = [
    {
      image: "https://m.media-amazon.com/images/I/81F38erQmuL._AC_UF1000,1000_QL80_.jpg",
      title: "Serenad",
      page: 480,
      price: 340,
    },
    {
      image: "https://m.media-amazon.com/images/I/91xrEMcvmQL._AC_UF1000,1000_QL80_.jpg",
      title: "1984",
      page: 328,
      price: 220,
    },
    {
      image: "https://i.dr.com.tr/cache/600x600-0/originals/0001712733001-1.jpg",
      title: "Doktor Monreau Adasi",
      page: 160,
      price: 180,
    },
    {
      image: "https://www.iskultur.com.tr/webp/2014/02/gwa-ciltli.jpg",
      title: "Genc Wheather Acilari",
      page: 160,
      price: 180,
    },
    {
      image: "https://img.kitapyurdu.com/v1/getImage/fn:1120559/wh:true/wi:800",
      title: "Kalkulus",
      page: 160,
      price: 180,
    },
    {
      image: "https://www.iskultur.com.tr/webp/2010/10/beyazdis-2.jpg",
      title: "Beyaz Dis",
      page: 160,
      price: 180,
    },
  ];
  */
  const [books, setBooks] = useState<Book[]>([]);
  const bookService = new BookService();

  useEffect (() => {
    const fetchBooks = async () => {
      try{
        const data = await bookService.getAll();
        setBooks(data);
      }catch(e){
        console.log(e);
      }
    };
    fetchBooks();
  }, [])
  
  return (
    <div className="min-h-screen px-10 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10">Kitaplar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onBasket={() => console.log("Sepete eklendi:", book.title)}
            onDetail={() => navigate(`/detail/${book.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home