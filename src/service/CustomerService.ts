import { Customer } from "../model/customer"
import api from "./api"

export default class CustomerService{
    init = {

    }
    getAllCustomers = async(): Promise<Customer[]> => {
        const response = await api.get<Customer[]>('/customer');
        return response.data;
    }
    getCustomerById = async(id: number): Promise<Customer[]> => {
        const response = await api.get<Customer[]>(`/customer/${id}`);
        return response.data;
    }
    postCustomer = async(customer: Customer): Promise<Customer[]> => {
        const response = await api.post<Customer[]>('/customer', customer);
        return response.data;
    }
    deleteCustomer = async(id: number): Promise<void> => {
        await api.delete<Customer[]>(`/customer/${id}`);
    }
}