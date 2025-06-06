import React, { useEffect, useState } from 'react'
import { Customer } from '../../model/customer'
import CustomerService from '../../service/CustomerService';

const CustomerFormTemplate = () => {

  const [customers, setCustomers] = useState<Customer[]>([]);
  const customerService = new CustomerService();

  // const customerss = [
  //   {
  //     id: 1,
  //     name: "Emir Petek",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bXYdCoAr1PnZ-STgOcGhPjhIWNqoScIBiA&s"
  //   },
  //   {
  //     id: 2,
  //     name: "Fatih Demirez",
  //     image: "https://media.licdn.com/dms/image/v2/C5603AQGLgJXqyEaQAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1608322118481?e=2147483647&v=beta&t=Ag7gLRPZ1NJCwgxZae7SJ8TtXQU170jgN2Cd_RbKmiw"
  //   },
  //   {
  //     id: 3,
  //     name: "Erva Ergül",
  //     image: "https://media.licdn.com/dms/image/v2/D4D03AQF7GEMGVt5BLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682522944559?e=2147483647&v=beta&t=82AabACTc6x40bSunCRCncFKCAjIl_qT4grfi2-sOYQ"
  //   },
  //   {
  //     id: 4,
  //     name: "Dilek Yildiz",
  //     image: "data:image/jpeg;base64,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"
  //   },
  //   {
  //     id: 5,
  //     name: "Omer",
  //     image: "https://media.licdn.com/dms/image/v2/C4D03AQEG2FekG5Suqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1601409742770?e=2147483647&v=beta&t=WOjtgJbSRbcIKca94Ym6WkWCYzWyMVbasbSgZ31U2js"
  //   }
  // ]

  useEffect(() => {
    const fetchCustomers = async() => {
      try{
        const response = await customerService.getAllCustomers();
        return setCustomers(response);
      }
      catch(e){
        console.log(e);
      }
    }
    fetchCustomers();
  }, [])

  const handleDelete = async (id: number) => {
    try {
      customerService.deleteCustomer(id).then(response => {
        setCustomers(customers.filter(customer => customer.id !== id))
      })
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Customer Management</h1>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3">Id</th>
                {/* <th className="px-6 py-3">Image</th> */}
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                {/* <th className="px-6 py-3">Phone</th> */}
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="bg-white border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{customer.id}</td>
                  {/* <td className="px-6 py-4">
                    <img
                      src={customer.name}
                      alt={customer.phone}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  </td> */}
                  <td className='px-6 py-3'>{customer.email + " " + customer.phone}</td>
                  <td className="px-6 py-4">{customer.surname}</td>
                  <td className="px-6 py-4">{customer.adress}</td>
                   
                  <td className="px-6 py-4">{customer.adress}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-800 font-semibold"
                        onClick={() => handleDelete(customer.id!)}
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
      </div>
    </section>
  )
}

export default CustomerFormTemplate