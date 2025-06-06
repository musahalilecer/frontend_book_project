import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className="flex flex-col max-h-screen">

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav className="flex flex-col gap-4">
            <Link to="/admin/book_form" className="hover:bg-gray-700 px-4 py-2 rounded transition">📚 Book</Link>
            <Link to="/admin/customer_form" className="hover:bg-gray-700 px-4 py-2 rounded transition">👤 Customer</Link>
            {/* <Link to="/order_form" className="hover:bg-gray-700 px-4 py-2 rounded transition">🛒 Orders</Link> */}
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default AdminNavbar