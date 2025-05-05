import React from 'react'
import BookTable from '../organism/BookTable'
import { Book } from '../../model/book';

interface BookFormTemplateProp{
  book: Book;
  books: Book[];
}

const BookFormTemplate: React.FC<BookFormTemplateProp> = ({}) => {

  const bookss: Book[] = [
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

  return (
    <section className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-500 mb-6">Book Management</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Page</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookss.map((book, index) => (
                <tr
                  key={index}
                  className="bg-white border-b "
                >
                  <td className="px-6 py-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-24 w-20 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {book.title}
                  </td>
                  <td className="px-6 py-4">{book.page}</td>
                  <td className="px-6 py-4">{book.price} TL</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default BookFormTemplate