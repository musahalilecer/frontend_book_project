import { useEffect, useState } from 'react'
import { Customer } from '../../model/customer'
import CustomerService from '../../service/CustomerService';

const CustomerFormTemplate = () => {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const customerService = new CustomerService();

  // const customerss = [
  //   {
  //     id: 1,
  //     image: "https://www.emirpetek.com/tr/assets/img/ben.png",
  //     name: "Emir Petek",
  //     surname: "Petek",
  //     adress: "Istanbul",
  //     phone: "555-0001",
  //     email: "emir@example.com"
  //   },
  //   {
  //     id: 2,
  //     image: "https://pbs.twimg.com/profile_images/1410257877428846624/wD3wydSU_400x400.jpg",
  //     name: "Fatih Demirez",
  //     surname: "Demirez",
  //     adress: "Ankara",
  //     phone: "555-0002",
  //     email: "fatih@example.com"
  //   },
  //   {
  //     id: 3,
  //     image: "https://media.licdn.com/dms/image/v2/D4D03AQF7GEMGVt5BLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682522944559?e=2147483647&v=beta&t=82AabACTc6x40bSunCRCncFKCAjIl_qT4grfi2-sOYQ",
  //     name: "Erva Ergül",
  //     surname: "Ergül",
  //     adress: "Izmir",
  //     phone: "555-0003",
  //     email: "erva@example.com"
  //   },
  //   {
  //     id: 4,
  //     image: "https://media.licdn.com/dms/image/v2/D4D03AQGXerxeRNJzbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723016281746?e=2147483647&v=beta&t=BVGM6EzrZryW4JubiR14lgIH0aHAoB-uj2UaUoCfqgw",
  //     name: "Dilek Yildiz",
  //     surname: "Yildiz",
  //     adress: "Bursa",
  //     phone: "555-0004",
  //     email: "dilek@example.com"
  //   },
  //   {
  //     id: 5,
  //     image: "https://media.licdn.com/dms/image/v2/C4D03AQEG2FekG5Suqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1601409742770?e=2147483647&v=beta&t=WOjtgJbSRbcIKca94Ym6WkWCYzWyMVbasbSgZ31U2js",
  //     name: "Omer",
  //     surname: "Omer",
  //     adress: "Antalya",
  //     phone: "555-0005",
  //     email: "omer@example.com"
  //   }
  // ]

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await customerService.getAllCustomers();
        return setCustomers(response);
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchCustomers();
  }, [])

  // const handleDelete = async (id: number) => {
  //   try {
  //     customerService.deleteCustomer(id).then(response => {
  //       setCustomers(customers.filter(customer => customer.id !== id))
  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }

  // }

  const handleDelete = async (id: number) => {
  try {
    await customerService.deleteCustomer(id);
    setCustomers(prevBooks => prevBooks?.filter(customer => customer.id !== id));
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Customer Management</h1>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="w-full text-sm text-left text-gray-700">


             <thead className="text-xs uppercase bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3">Id</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

             <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="bg-white border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{customer.id}</td>
                  <td className="px-6 py-4">
                  </td>
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
