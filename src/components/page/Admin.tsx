import React from 'react'
import {  Outlet } from 'react-router-dom'
import AdminNavbar from '../organism/AdminNavbar'


const Admin: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <AdminNavbar />
       <main className="flex-1 bg-gray-50 p-10 overflow-auto">
        <Outlet />
      </main> 
    </div>
  )
}

/*
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin' element={<Admin />}/>

        <Route path='/book_form' element={<BookFormTemplate book={{
            image: '',
            title: '',
            page: 0,
            price: 0
          }} books={[]} />}/>
        <Route path='/customer_form' element={<CustomerFormTemplate />}/>

      </Routes>
*/

export default Admin

/*
<div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar className="w-full" />

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/book_form' element={<BookFormTemplate />}/>
        <Route path='/customer_form' element={<CustomerFormTemplate />}/>
      </Routes>
    </main>

    <Footer className='mb-0'/>
  </div>
*/