import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface NavbarProp {
  className: string;
}

const Navbar: React.FC<NavbarProp> = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!sw800" alt="Logo" className="h-12 w-12" />
            </Link>
            <span className="text-xl font-semibold text-gray-800 dark:text-white">MyApp</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-white hover:text-blue-600">About</Link>
            <Link to="/admin" className="text-gray-700 dark:text-white hover:text-blue-600">Admin</Link>
            <Link to="/login" className="text-gray-700 dark:text-white hover:text-blue-600">Login</Link>
            <Link to="/register" className='text-gray-700 dark:text-white hover:text-blue-600'>Register</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <Link to="/" className="block text-gray-700 dark:text-white hover:text-blue-600">Home</Link>
          <Link to="/about" className="block text-gray-700 dark:text-white hover:text-blue-600">About</Link>
          <Link to="/contact" className="block text-gray-700 dark:text-white hover:text-blue-600">Contact</Link>
          <Link to="/login" className="block text-gray-700 dark:text-white hover:text-blue-600">Login</Link>
          <Link to="/register" className="block text-gray-700 dark:text-white hover:text-blue-600">Register</Link>

        </div>
      )}
    </div>
  );
};

    // <div className={className}>
    //   <nav className="bg-white border-gray-200 dark:border-gray-900 h-20">
    //     <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
    //       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <img
    //           src="https://images-platform.99static.com//BwC3S-3fzGv9AL9dmV6XP-EkD0g=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/137/137628/attachment_137628251"
    //           alt="Libary"
    //         />
    //         <span></span>
    //       </Link>
    //       <button
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         type="button"
    //         data-collapse-toggle="navbar-default"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <ul className="font-medium flex flex-col p-4 mt-4 md:p-0 rounded-lg border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/basket" className="block py-2 px-3 text-gray-900 rounden-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //               Basket
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/contact" className="block py-2 px-3 text-gray-900 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //               Contact
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/admin" className="block py-2 px-3 text-gray-900 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //               Admin
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

//  );
//};

export default Navbar;