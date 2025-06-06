import { Publisher } from "../model/publisher";
import api from "./api"

export default class PublisherService{

    getAllPublisher = async(): Promise<Publisher[]> => {
        const response = await api.get<Publisher[]>('/publisher');
        return response.data;        
    }
}