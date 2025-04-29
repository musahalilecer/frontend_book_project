import React from 'react'
import { Customer } from '../../model/customer'
import TableHead from '../molecule/TableHead';
import TableRow from '../molecule/TableRow';
interface CustomerTableProps {
  customer: Customer;
  customers: Customer[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customer, customers, ...props }) => {
  return (
    <div className='relative overflow-x-auto'>
      <div className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <TableHead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' headers={[
          "Name",
          "Surname",
          "Email",
          "Phone",
          "Adress"
        ]} />
        <div>
          {customers.map((customer, index) => (
            <TableRow 
            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
            key={index}
            data={[
              customer.name,
              customer.surname,
              customer.email,
              customer.phone,
              customer.adress
            ]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerTable