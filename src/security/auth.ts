import axios, { AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { AuthenticateResponse } from "../model/security/authentication_response";
import { AxiosData } from "../model/security/axios_data";
import { UserModel } from "../model/user_model";


export default class Auth {
  private api_token: string | undefined;
  private client: AxiosInstance | null | undefined;
  private api_url: string | undefined;

  constructor() {
    this.api_token = undefined;
    this.client = null;
    this.api_url = import.meta.env.VITE_REACT_APP_API_ENDPOINT + "/auth";
  };

  init = (): AxiosInstance => {
    this.api_token = Cookies.get("token");

    let headers: Record<string, string> = {
      Accept: "application/json",
    };
    if(this.api_token){
        headers.Authorization = `Bearer ${this.api_token}`;
    }
    this.client = axios.create({
        baseURL: this.api_url,
        timeout: 31000,
        headers: headers,
    });
    return this.client;
  };

  login = async (
  username: string,
  password: string
): Promise<AxiosResponse<AuthenticateResponse>> => {
  const response = await axios.post(
    import.meta.env.VITE_REACT_APP_API_ENDPOINT + "/auth/login",
    { username, password }
  );

  const token = response.data.token;
  if (token) {
    Cookies.set("token", token, { expires: 1 }); // 1 gün
  }

  return response;
};

register = async (
  username: string,
  password: string
): Promise<AxiosResponse<any>> => {
  const response = await axios.post(
    import.meta.env.VITE_REACT_APP_API_ENDPOINT + "/auth/register",
    { username, password }
  );

  const token = response.data.token;
  if (token) {
    Cookies.set("token", token, { expires: 1 }); // 1 gün
  }

  return response;
};

logout = () => {
    Cookies.remove("token");
}
  get = (): Promise<AxiosData<UserModel>> => {
        return this.init().get("", {});
    };

    put = (model: UserModel): Promise<AxiosData<any>> => {
        return this.init().put("", { model });
    };
}
