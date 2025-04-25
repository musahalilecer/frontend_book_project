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
    <div>
      <div>
        <TableHead headers={[
          "Name",
          "Surname",
          "Email",
          "Phone",
          "Adress"
        ]} />
        <div>
          {customers.map((customer, index) => (
            <TableRow 
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