import { Country } from "../model/country";
import api from "./api"

export default class CountryService{
    /*
    getAllAuthors = async(): Promise<Author[]> => {
        const response = await api.get<Author[]>('/author');
        return response.data;
    }
    */
    getAllCountries = async(): Promise<Country[]> => {
        const response = await api.get<Country[]>('/country');
        return response.data;
    }
}