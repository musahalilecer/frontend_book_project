import { Language } from "../model/language"
import api from "./api"

export default class LangaugeService{

    init = () => {

    }

    getAllLanguage = async(): Promise<Language[]> => {
        const response = await api.get<Language[]>('/language');
        return response.data;
    }
}