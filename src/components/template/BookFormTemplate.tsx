import React, { useEffect, useState } from 'react'
import { Book } from '../../model/book';
import Button from '../atomic/Button';
import { useNavigate } from 'react-router-dom';
import BookService from '../../service/BookService';

interface BookFormTemplateProp {

}

const BookFormTemplate: React.FC<BookFormTemplateProp> = ({ }) => {

  const [books, setBooks] = useState<Book[]>();

  const navigate = useNavigate();
  const bookService = new BookService();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookService.getAll();
        setBooks(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks(); // fonksiyonu çağırmayı unutma
  }, []);

//   const handleDelete = async (id?: number) => {
//     try {
//       bookService.delete(id!).then(response => {
//         setBooks(books?.filter(book => book.id !== id));
//       })
//     }catch(e){
//       console.log(e);
//     }
// }

const handleDelete = async (id: number) => {
  try {
    await bookService.delete(id);
    setBooks(prevBooks => prevBooks?.filter(book => book.id !== id));
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

  /*
    const deleteProduct = (productId: number) => {
          productService.delete(productId).then(response => {
              setProducts(products.filter(product => product.productId !== productId));
          }).catch(error => {
              console.error('Error deleting product:', error);
          });
      };
    */

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
              {books?.map((book, index) => (
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
                    <div className='flex justify-between align-baseline'>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => handleDelete(book.id!)}
                      >
                        Delete
                      </a>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='justify-items-end'>
          <Button onClick={() => navigate("/admin/book_add")} className='w-full bg-green-500 text-white text-sm py-2 rounded-md hover:bg-green-700 transition-colors duration-200 cursor-pointer mt-3' children="Add Book" type='button' />
        </div>
      </div>
    </section>
  )
}

export default BookFormTemplate