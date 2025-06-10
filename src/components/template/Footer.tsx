import React from 'react'

interface FooterProp {
  className: string;
}
const Footer: React.FC<FooterProp> = ({ className }) => {
  return (
    <div className={className}>
      <footer className='bg-white rounded-ld shadow-sm m-4 mb-1 dark:bg-gray-800 h-16'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            <a href="">© 2023 </a>
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <a href="/about" className='hover:underline me-2 md:me-6 text text-base'>About</a>
            </li>
            <li>
              <a href="" className='hover:underline me-2 md:me-6 text-base'>Privacy</a>
            </li>
            <li>
              <a href="" className='hover:underline me-2 md:m-6 text-base'>Licesing</a>
            </li>
            <li>
              <a href="/contact" className='hover:underline me-2 md:me-6 text-base'>Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>

  )
}

export default Footer