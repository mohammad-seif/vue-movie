import axios from "axios";

export interface IApi {
  setHeaders: (newHeaders: Object) => any;
  post: (url: string, payload: any) => any;
  get: (url: string, payload: any) => any;
  delete: (url: string, payload: any) => any;
  patch: (url: string, payload: any) => any;
  setup: (baseURL: string, headers: Object) => void;
}

export default class AxiosApi implements IApi {
  private baseURL: string = "";
  private headers: Object = {};

  setHeaders(newHeaders: Object) {
    Object.assign(this.headers, newHeaders);
    return this;
  }

  setup(baseURL: string, headers: Object) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async post(url: string, payload: any) {
    
  }

  async get(url: string, payload?: any) {
    const res = await axios.get(url, payload);
    console.log(res)
  }
  
  async delete(url: string, payload: any) {
  } 
  
  async patch(url: string, payload: any) {
  }
}
