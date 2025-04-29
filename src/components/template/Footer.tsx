import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-white rounded-ld shadow-sm m-4 dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          <a href="">© 2023 </a>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href="" className='hover:underline me-2 md:me-6'>About</a>
          </li>
          <li>
            <a href="" className='hover:underline me-2 md:me-6'>Privacy</a>
          </li>
          <li>
            <a href="" className='hover:underline me-2 md:m-6'>Licesing</a>
          </li>
          <li>
            <a href="" className='hover:underline me-2 md:me-6'>Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer