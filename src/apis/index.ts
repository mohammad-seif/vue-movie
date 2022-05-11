import type { IApi } from "@/libs/axios";

export interface IService {
  baseURL: string;
  headers: Object;
  apiExecuter: IApi;
}
export default class Service implements IService {
  baseURL: string = "";
  headers: Object = {};
  apiExecuter!: IApi;
  
  setBaseUrl(newUrl: string) {
    this.baseURL = newUrl;
    return this;
  }

  setHeaders(newHeaders: Object) {
    this.headers = newHeaders;
    return this;
  }

  setApiExecuter(newExecuter: IApi) {
    this.apiExecuter = newExecuter;
    return this;
  }

  buildApi() {
    this.apiExecuter.setup(this.baseURL, this.headers);
    return this;
  }

  get(url: string, payload?: any) {
    this.apiExecuter.get(url, payload);
  }
  
  delete(url: string, payload: any) {
    this.apiExecuter.delete(url, payload);
  } 
  
  patch(url: string, payload: any) {
    this.apiExecuter.patch(url, payload);
  }

  post(url: string, payload: any) {
    this.apiExecuter.post(url, payload);
  }

}

// const service = new Service();

// const api = service
//   .setBaseUrl("/v1")
//   .setHeaders({"Content-type": "application/json"})
//   .setApiExecuter(new FetchApi())
//   .buildApi();
